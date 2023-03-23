import React, { useState, useEffect } from "react";
import LayoutBoss from "./../components/layout/BaseLayout";
import {
  Space,
  Button,
  Row,
  Col,
  Table,
  Divider,
  Input,
  Select,
  DatePicker,
  Layout,
  Pagination,
  Modal,
} from "antd";
import {
  createTicket,
  updateTicket,
  getTicket,
  getCustomer,
  getAccessUser,
  getCategory,
  getDepartment,
  getDepartmentEmail,
  getPriority,
  getSubCategory,
  getSummaryCase,
} from "./../store";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import ModalView from "./../components/ticket/ModalView";
import ModalForm from "./../components/ticket/ModalForm";
import { columnTable } from "./../utils/tableHeader";
import { useRouter } from "next/router";

const { Content } = Layout;
export default function Ticket() {
  const router = useRouter();
  const { appid, id } = router.query;

  const dispatch = useDispatch();
  const [modalForm, setModalForm] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [formTypeTicket, setFormTypeTicket] = useState("create");
  const [dataView, setDataView] = useState(null);
  const [modal, contextHolder] = Modal.useModal();

  const [bodyGetData, setBodyGetData] = useState([
    {
      ticket_id: "",
      summary_case: "",
      start_date: "",
      end_date: "",
      customer_name: "",
      reporter_name: "",
      caller_number: "",
      status: "",
      category: "",
      page: "1",
    },
  ]);
  const { RangePicker } = DatePicker;

  const getTicketResult = useSelector((state) => state.getTicket.result);
  const getTicketLoading = useSelector((state) => state.getTicket.loading);
  const updateTicketLoading = useSelector(
    (state) => state.updateTicket.loading
  );
  const createTicketLoading = useSelector(
    (state) => state.createTicket.loading
  );
  const getCustomerResult = useSelector((state) => state.getCustomer.result);

  const getCategoryResult = useSelector((state) => state.getCategory.result);
  const getSubCategoryResult = useSelector(
    (state) => state.getSubCategory.result
  );
  const getDepartmentResult = useSelector(
    (state) => state.getDepartment.result
  );
  const getDepartmentEmailResult = useSelector(
    (state) => state.getDepartmentEmail.result
  );
  const getPriorityResult = useSelector((state) => state.getPriority.result);
  const getSummaryCaseResult = useSelector(
    (state) => state.getSummaryCase.result
  );
  const getAccessUserResult = useSelector(
    (state) => state.getAccessUser.result
  );

  useEffect(() => {
    const body = {
      ticket_id: "",
      summary_case: "",
      start_date: "",
      end_date: "",
      customer_name: "",
      reporter_name: "",
      caller_number: "",
      status: "",
      category: "",
      page: "1",
    };
    const token = sessionStorage.getItem("userTokenBossLite");

    if (token) {
      const bodyAccessUser = {
        user_app_id: appid,
        user_id: id,
      };
      dispatch(getAccessUser(bodyAccessUser));
      dispatch(getTicket(body));
      dispatch(getCategory());
      dispatch(getDepartment());
      dispatch(getPriority());
      dispatch(getSummaryCase());
    }
  }, [
    router,
    dispatch,
    getAccessUser,
    getCategory,
    getDepartment,
    getPriority,
    getSummaryCase,
    getTicket,
  ]);

  const getTicketData = () => {
    const body = {
      ticket_id: "",
      summary_case: "",
      start_date: "",
      end_date: "",
      customer_name: "",
      reporter_name: "",
      caller_number: "",
      status: "",
      category: "",
      page: "1",
    };
    dispatch(getTicket(body));
  };

  const handleFinish = (values) => {
    const escalationTo = [];
    const arr = [];
    let assignTo = {};
    for (let i = 0; i < values.items.length; i++) {
      escalationTo.push(Number(values.items[i].escalation_to));
      const assignToTemp = values.items[i].escalation_to;
      let groupAssignTo = [];
      for (let j = 0; j < values.items[i].assign_to.length; j++) {
        groupAssignTo.push(values.items[i].assign_to[j]);
      }
      assignTo[assignToTemp] = groupAssignTo;
    }
    arr.push(assignTo);
    const bodyFormSubmit = {
      assign_to: arr[0],
      caller_number: values.caller_number,
      case_ticket_detail: values.case_ticket_detail,
      category: Number(values.category),
      close_due_date: new Date(values.close_due_date.format("YYYY-MM-DD")),
      name: values.customer_name,
      contract_number: values.contract_number,
      escalation: Number(values.escalation),
      escalation_to: escalationTo,
      legal_phone: values.legal_phone,
      link_attachment: values.link_attachment,
      created_by: getAccessUserResult.fullname,
      priority: Number(values.priority),
      reporter_name: values.reporter_name,
      response_due_date: new Date(
        values.response_due_date.format("YYYY-MM-DD")
      ),
      solution: values.solution,
      status: "NEW",
      source: 1101,
      sub_category: Number(values.sub_category),
      summary_case: Number(values.summary_case),
      customer_response: values.customer_response,
    };
    dispatch(createTicket(bodyFormSubmit));
    setModalForm(false);
  };

  const handleFinishEdit = (values) => {
    const escalationTo = [];
    const arr = [];
    let assignTo = {};
    for (let i = 0; i < values.items.length; i++) {
      escalationTo.push(Number(values.items[i].escalation_to));
      const assignToTemp = values.items[i].escalation_to;
      let groupAssignTo = [];
      for (let j = 0; j < values.items[i].assign_to.length; j++) {
        groupAssignTo.push(values.items[i].assign_to[j]);
      }
      assignTo[assignToTemp] = groupAssignTo;
    }
    arr.push(assignTo);
    const bodyFormSubmit = {
      assign_to: arr[0],
      case_ticket_detail: values.case_ticket_detail,
      escalation_to: escalationTo,
      link_attachment: values.link_attachment,
      updated_by: getAccessUserResult.fullname,
      solution: values.solution,
      status: values.status,
      customer_response: values.customer_response,
      pic_response: values.pic_response,
      id: values.id,
    };

    dispatch(updateTicket(bodyFormSubmit));
    getTicketData();
    setModalView(false);
  };
  const openModalForm = (value) => {
    setModalForm(true);
    setFormTypeTicket(value);
  };

  const openModalView = (value) => {
    getSubCategoryData(value.category);
    console.log(value.category);
    setDataView(value);
    setModalView(true);
  };

  const closeModalView = () => {
    setDataView(null);
    setModalView(false);
  };

  const getSubCategoryData = (values) => {
    const bodyGetSubCategoryData = {
      category: values,
    };
    dispatch(getSubCategory(bodyGetSubCategoryData));
  };

  const getDepartmentEmailData = (values) => {
    const bodyGetDepartmentEmailData = {
      department: values,
    };
    dispatch(getDepartmentEmail(bodyGetDepartmentEmailData));
  };

  const getCustomerData = (values) => {
    const bodyGetCustomerData = {
      agreement: values,
    };
    dispatch(getCustomer(bodyGetCustomerData));
  };

  const onChangeDate = (date, dateString) => {
    bodyGetData[0].start_date = dateString[0];
    bodyGetData[0].end_date = dateString[1];
    let newData = [...bodyGetData];

    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangeTicket = (e) => {
    bodyGetData[0].ticket_id = e.target.value;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangeCustomerName = (e) => {
    bodyGetData[0].customer_name = e.target.value;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangeCallerNo = (e) => {
    bodyGetData[0].caller_number = e.target.value;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangeReporterName = (e) => {
    bodyGetData[0].reporter_name = e.target.value;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangeCategory = (e) => {
    bodyGetData[0].category = e === undefined ? "" : e;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangeStatus = (e) => {
    bodyGetData[0].status = e === undefined ? "" : e;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const onChangePage = (page) => {
    bodyGetData[0].page = page;
    let newData = [...bodyGetData];
    setBodyGetData(newData);
    dispatch(getTicket(bodyGetData[0]));
  };

  const confirmSimpan = (values) => {
    modal.confirm({
      title: "Konfirmasi Tambah Ticket",
      icon: <ExclamationCircleOutlined />,
      content: "Apakah anda yakin ingin melanjutkan ?",
      okText: "Ya, Lanjutkan",
      cancelText: "Tidak",
      onOk: () => {
        handleFinish(values);
      },
    });
  };

  const confirmUpdate = (values) => {
    modal.confirm({
      title: "Konfirmasi Update Ticket",
      icon: <ExclamationCircleOutlined />,
      content:
        "Apakah anda tetap akan ingin melakukan update data ini ? " + values.id,
      okText: "Ya, Lanjutkan",
      cancelText: "Tidak",
      onOk: () => {
        handleFinishEdit(values);
      },
    });
  };
  return (
    <LayoutBoss className="layout-page" keys={"ticket"}>
      <Content>
        <Divider orientation="left">Ticket</Divider>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Row gutter={[8, 16]}>
            <Col flex={1}>
              <Input
                style={{ width: "100%" }}
                onChange={onChangeTicket}
                placeholder="Ticket No"
              />
            </Col>
            <Col flex={1}>
              <Input
                style={{ width: "100%" }}
                onChange={onChangeCustomerName}
                placeholder="Customer Name"
              />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col flex={1}>
              <Input
                style={{ width: "100%" }}
                onChange={onChangeCallerNo}
                placeholder="Caller No"
              />
            </Col>
            <Col flex={1}>
              <Input
                style={{ width: "100%" }}
                onChange={onChangeReporterName}
                placeholder="Reporter Name"
              />
            </Col>
          </Row>
          <Row gutter={[8, 16]}>
            <Col flex={1}>
              <Select
                placeholder="Category"
                style={{ width: "100%" }}
                allowClear
                options={[
                  {
                    value: "201",
                    label: "201 - Request (Permintaan)",
                  },
                  {
                    value: "203",
                    label: "203 - Information",
                  },
                  {
                    value: "204",
                    label: "204 - Complaint/Critics",
                  },
                ]}
                onChange={onChangeCategory}
              />
            </Col>
            <Col flex={1}>
              <Select
                placeholder="Status"
                style={{ width: "100%" }}
                allowClear
                options={[
                  {
                    value: "NEW",
                    label: "New",
                  },
                  {
                    value: "CLOSED",
                    label: "Closed",
                  },
                ]}
                onChange={onChangeStatus}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Space>
              <Col flex={1}>
                <RangePicker onChange={onChangeDate} />
              </Col>
            </Space>
          </Row>
        </Space>
      </Content>
      <Divider orientation="right">
        <Button
          type="primary"
          className="btn-primary"
          icon={<PlusCircleOutlined />}
          size={"medium"}
          onClick={() => openModalForm("add")}
        >
          Buat Ticket Baru
        </Button>
      </Divider>

      <Table
        loading={getTicketLoading}
        rowKey={(record) => record.id}
        dataSource={getTicketResult ? getTicketResult.items : null}
        columns={columnTable(openModalView, getSummaryCaseResult)}
        pagination={false}
        scroll={{
          x: 1000,
          y: 600,
        }}
      />
      <Divider />
      <Pagination
        defaultCurrent={
          getTicketResult ? getTicketResult.pagination.current_page : null
        }
        total={getTicketResult ? getTicketResult.pagination.total_items : null}
        onChange={onChangePage}
      />

      <ModalForm
        centered
        title={formTypeTicket === "create" ? "Create Ticket" : "Update Ticket"}
        visible={modalForm}
        onCancel={() => setModalForm(false)}
        okButtonProps={{
          form: "formPengiriman",
          key: "submit",
          htmlType: "submit",
        }}
        formType={formTypeTicket}
        onFinish={(values) => confirmSimpan(values)}
        loading={createTicketLoading}
        getCustomerData={(values) => getCustomerData(values)}
        getSubCategoryData={(values) => getSubCategoryData(values)}
        getDepartmentEmailData={(values) => getDepartmentEmailData(values)}
        dataCategory={getCategoryResult}
        dataDepartment={getDepartmentResult}
        dataPriority={getPriorityResult}
        dataSummaryCase={getSummaryCaseResult}
        dataSubCategory={getSubCategoryResult}
        dataDepartmentEmail={getDepartmentEmailResult}
        dataCustomer={getCustomerResult}
      />
      <ModalView
        okButtonProps={{
          form: "formEdit",
          key: "submit",
          htmlType: "submit",
        }}
        centered
        visible={modalView}
        onCancel={() => closeModalView()}
        data={dataView}
        loading={updateTicketLoading}
        onFinish={(values) => confirmUpdate(values)}
        dataCategory={getCategoryResult}
        dataDepartment={getDepartmentResult}
        dataPriority={getPriorityResult}
        dataSummaryCase={getSummaryCaseResult}
        dataSubCategory={getSubCategoryResult}
        dataDepartmentEmail={getDepartmentEmailResult}
        dataCustomer={getCustomerResult}
        getDepartmentEmailData={(values) => getDepartmentEmailData(values)}
      />
      {contextHolder}
    </LayoutBoss>
  );
}
