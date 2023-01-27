import React, { useState } from "react";
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
} from "antd";
// import { createTicket, updateTicket, getTicket } from "./../../store";
// import { useDispatch } from "react-redux";
import { PlusCircleOutlined, FolderOutlined } from "@ant-design/icons";
import ModalView from "./../components/ticket/ModalView";
import ModalForm from "./../components/ticket/ModalForm";

const { Content } = Layout;
export default function Ticket() {
  // const dispatch = useDispatch();
  const [modalForm, setModalForm] = useState(false);
  const [modalView, setModalView] = useState(false);
  const [formTypeTicket, setFormTypeTicket] = useState("create");
  const [dataView, setDataView] = useState(null);
  const { RangePicker } = DatePicker;

  // const bodyTanggal = {
  //   start_date: "2021-01-02",
  //   end_date: "2022-11-02",
  // };

  // const [tanggal, setTanggal] = useState(bodyTanggal);

  // const getTicketResult = useSelector(
  //   (state) => state.getTicket.result
  // );
  // const getTicketLoading = useSelector(
  //   (state) => state.getTicket.loading
  // );
  // const getTicketError = useSelector(
  //   (state) => state.getTicket.error
  // );

  // const createTicketResult = useSelector(
  //   (state) => state.createTicket.result
  // );
  // const createTicketLoading = useSelector(
  //   (state) => state.createTicket.loading
  // );
  // const createTicketError = useSelector(
  //   (state) => state.createTicket.error
  // );

  // const updateTicketResult = useSelector(
  //   (state) => state.updateTicket.result
  // );
  // const updateTicketLoading = useSelector(
  //   (state) => state.updateTicket.loading
  // );
  // const updateTicketError = useSelector(
  //   (state) => state.updateTicket.error
  // );

  const handleFinish = () => {};

  const onChange = (date, dateString) => {
    // const data = {
    //   start_date: dateString[0],
    //   end_date: dateString[1],
    // };
    // setTanggal(data);
  };

  const openModalForm = (value) => {
    setModalForm(true);
    setFormTypeTicket(value);
  };

  const openModalView = (value) => {
    setModalView(true);
    setDataView(value);
  };

  const closeModalView = () => {
    setDataView(null);
    setModalView(false);
  };

  const originData = [];
  for (let i = 0; i < 2; i++) {
    originData.push({
      key: i.toString(),
      ticket_number: `E89AS798DFDF ${i}`,
      summary_case: "Perbedaan Nominal Angsuran",
      agreement_number: "45454345345344",
      customer_name: "Bambang Cahyo",
      reporter: "Agus (Anak)",
      create_ticket_date: "04/05/2022",
      close_ticket_date: "-",
      category: "Complaint",
      approved_document: "-",
      sla_pelaporan: "30",
      sla_penyelesaian: "29",
      sisa_sla_penyelesaian: "9",
      perpanjangan: "1",
      status: "IN PROGRESS",
      pic_escalation: "idpx@baf.id",
    });
  }

  const columnTable = [
    {
      title: "Ticket Number",
      dataIndex: "ticket_number",
      key: "ticket_number",
      width: 160,
    },
    {
      title: "Summary Case",
      dataIndex: "summary_case",
      key: "summary_case",
      width: 160,
    },
    {
      title: "Agreement Number",
      dataIndex: "agreement_number",
      key: "agreement_number",
      width: 180,
    },
    {
      title: "Customer Name",
      dataIndex: "customer_name",
      key: "customer_name",
      width: 160,
    },
    {
      title: "Reporter",
      dataIndex: "reporter",
      key: "reporter",
      width: 160,
    },
    {
      title: "Create Ticket Date",
      dataIndex: "create_ticket_date",
      key: "create_ticket_date",
      width: 200,
    },
    {
      title: "Close Ticket Date",
      dataIndex: "close_ticket_date",
      key: "close_ticket_date",
      width: 160,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: 160,
    },
    {
      title: "Approved Document",
      dataIndex: "approved_document",
      key: "approved_document",
      width: 180,
    },
    {
      title: "SLA Pelaporan",
      dataIndex: "sla_pelaporan",
      key: "sla_pelaporan",
      width: 160,
    },
    {
      title: "SLA Penyelesaian",
      dataIndex: "sla_penyelesaian",
      key: "sla_penyelesaian",
      width: 160,
    },
    {
      title: "Sisa SLA Penyelesaian",
      dataIndex: "sisa_sla_penyelesaian",
      key: "sisa_sla_penyelesaian",
      width: 190,
    },
    {
      title: "Perpanjangan",
      dataIndex: "perpanjangan",
      key: "perpanjangan",
      width: 160,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 160,
    },
    {
      title: "PIC Escalation",
      dataIndex: "pic_escalation",
      key: "pic_escalation",
      width: 160,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 160,
      render: (text, record) => (
        <Row>
          <Space size="small" align="center">
            <Button
              className="btn-primary"
              type="primary"
              onClick={() => openModalView(record)}
              icon={<FolderOutlined />}
            >
              Edit Data
            </Button>
          </Space>
        </Row>
      ),
    },
  ];
  return (
    <LayoutBoss className="layout-page" keys={"ticket"}>
      <Content>
        <Divider orientation="left">Ticket</Divider>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Row gutter={[16, 16]}>
            <Col flex={1}>
              <Input style={{ width: "100%" }} placeholder="Ticket No" />
            </Col>
            <Col flex={1}>
              <Input style={{ width: "100%" }} placeholder="Customer No" />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col flex={1}>
              <Input style={{ width: "100%" }} placeholder="Caller No" />
            </Col>
            <Col flex={1}>
              <Input style={{ width: "100%" }} placeholder="Agreement No" />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col flex={1}>
              <Select
                placeholder="Category"
                style={{ width: "100%" }}
                allowClear
                options={[
                  {
                    value: "Complaint",
                    label: "Complaint",
                  },
                ]}
              />
            </Col>
            <Col flex={1}>
              <Select
                placeholder="Status"
                style={{ width: "100%" }}
                allowClear
                options={[
                  {
                    value: "Complaint",
                    label: "Complaint",
                  },
                ]}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Space>
              <Col flex={1}>
                <RangePicker onChange={onChange} />
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
        // loading={this.props.loadingTable}
        rowKey={(record) => record.id}
        dataSource={originData}
        columns={columnTable}
        //   pagination={{ pageSize: this.state.count }}
        //   onChange={this.handleTableChange}
        scroll={{
          x: 1000,
          y: 300,
        }}
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
        onFinish={(values) => handleFinish(values)}
        // loading={createTicketLoading}
      />
      <ModalView
        centered
        visible={modalView}
        onCancel={() => closeModalView()}
        data={dataView}
        onFinish={(values) => handleFinish(values)}
      />
    </LayoutBoss>
  );
}
