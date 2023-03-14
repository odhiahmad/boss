import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Row,
  Col,
  Button,
  Space,
  List,
  Checkbox,
  DatePicker,
  Divider,
  Select,
  Spin,
} from "antd";
import moment from "moment";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
moment.locale("id");
const dayjs = require("dayjs");

export default function ModalForm({
  visible,
  onCancel,
  onFinish,
  loading,
  data,
  okButtonProps,
  dataCategory,
  dataSubCategory,
  dataPriority,
  dataSummaryCase,
  dataDepartment,
  dataDepartmentEmail,
  getDepartmentEmailData,
}) {
  const [form] = Form.useForm();
  // const { Option } = Select
  const { TextArea } = Input;

  const [documentLinkEdit, setDocumentLinkEdit] = useState(false);

  useEffect(() => {
    if (data) {
      const created_date_temp = moment(data.created_at).format("YYYY-MM-DD");
      const dataItems = [];
      const dataAssignTemp = data.assign_to;
      const keysAssign = Object.keys(dataAssignTemp);

      keysAssign.forEach((key, index) => {
        dataItems.push({ escalation_to: key, assign_to: [] });
        let keysAssignChild = Object.keys(dataAssignTemp[key]);
        keysAssignChild.forEach((keyChild, indexChild) => {
          dataItems[index].assign_to.push(dataAssignTemp[key][indexChild]);
        });
      });

      form.setFieldsValue({
        ticket_no: data.id,
        created_by: data.created_by,
        reporter_name: data.reporter_name,
        caller_number: data.caller_number,
        legal_phone: data.legal_phone,
        contract_number: data.contract_number,
        priority: data.priority.toString(),
        customer_name: data.name,
        link_attachment: data.link_attachment,
        case_ticket_detail: data.case_ticket_detail,
        category: data.category.toString(),
        sub_category: data.sub_category.toString(),
        solution: data.solution,
        customer_response: data.customer_response,
        summary_case: data.summary_case.toString(),
        escalation: data.escalation.toString(),
        items: dataItems,
        created_date: dayjs(created_date_temp),
        id: data.id,
        status: data.status,
        // customer_name: data.name,
      });
    }
  }, [data]);

  const onChangeDocumentNeeded = (e) => {
    setDocumentLinkEdit(e.target.checked);
  };
  return (
    <Modal
      centered
      title={"View Ticket"}
      open={visible}
      onCancel={onCancel}
      width={"50%"}
      okButtonProps={okButtonProps}
      okText="Simpan"
      maskClosable={false}
      afterClose={() => {
        form.resetFields();
      }}
    >
      <Spin spinning={loading}>
        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Form form={form} layout="vertical" onFinish={onFinish} id="formEdit">
            <Form.Item label="Status :" name="status">
              <Input style={{ width: "100%" }} readOnly />
            </Form.Item>
            <Form.Item hidden={true} name="id">
              <Input />
            </Form.Item>
            <Row justify="space-between" align="bottom">
              <Col>
                <Form.Item label="Ticket No :" name="ticket_no">
                  <Input style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Created Date :" name="created_date">
                  <DatePicker style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Created By :" name="created_by">
              <Input style={{ width: "100%" }} readOnly />
            </Form.Item>

            <Row justify="space-between" align="bottom">
              <Col>
                <Form.Item label="Reporter Name :" name="reporter_name">
                  <Input style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Caller Number :" name="caller_number">
                  <Input style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Form.Item label="Legal Phone :" name="legal_phone">
                  <Input style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Contract Number :" name="contract_number">
                  <Input style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Form.Item label="Priority :" name="priority">
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Pilih Priority"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataPriority ? dataPriority : null}
                    readOnly
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Customer Name :" name="customer_name">
                  <Input style={{ width: "100%" }} readOnly />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Document Link :" name="link_attachment">
              <Input
                style={{ width: "100%" }}
                disabled={documentLinkEdit ? false : true}
              />
            </Form.Item>
            <Form.Item name="document_needed" valuePropName="checked">
              <Checkbox onChange={onChangeDocumentNeeded}>
                Document Needed
              </Checkbox>
            </Form.Item>

            {/* <Row justify="space-between" align="bottom">
                  <Col>
                    <Form.Item label="Reporting SLA :" name="reporting_sla">
                      <Input style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="Resolution SLA :" name="resolution_sla">
                      <Input style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row> */}
            <Form.Item
              label="Case / Ticket Detail :"
              name="case_ticket_detail"
              rules={[
                {
                  required: true,
                  message: "Tolong inputkan ticket detail!",
                },
              ]}
            >
              <TextArea style={{ width: "100%" }} />
            </Form.Item>

            <Row justify="space-between" align="bottom">
              <Col>
                <Form.Item label="Category :" name="category">
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Pilih Category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataCategory ? dataCategory : null}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Sub Category :" name="sub_category">
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Pilih Sub Category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataSubCategory ? dataSubCategory : null}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Form.Item label="Summary Case :" name="summary_case">
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Pilih Category"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={dataSummaryCase ? dataSummaryCase : null}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item
                  label="Escalation / No Escalation :"
                  name="escalation"
                >
                  <Select
                    showSearch
                    placeholder="Pilih Escalation"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    options={[
                      {
                        value: "902",
                        label: "Escalation",
                      },
                      {
                        value: "901",
                        label: "No Escalation",
                      },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
            {data ? (
              data.escalation === 902 ? (
                <>
                  <Form.List name="items">
                    {(fields, { add, remove }) => {
                      return (
                        <>
                          {fields.map((field) => (
                            <>
                              <MinusCircleOutlined
                                onClick={() => remove(field.name)}
                              />
                              <Form.Item
                                label="Escalation to"
                                name={[field.name, "escalation_to"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Tolong inputkan escalation to!",
                                  },
                                ]}
                              >
                                <Select
                                  showSearch
                                  placeholder="Pilih Escalation"
                                  optionFilterProp="children"
                                  filterOption={(input, option) =>
                                    (option?.label ?? "").includes(input)
                                  }
                                  options={
                                    dataDepartment ? dataDepartment : null
                                  }
                                  onChange={getDepartmentEmailData}
                                />
                              </Form.Item>
                              <Form.Item
                                label="Assign to"
                                name={[field.name, "assign_to"]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Tolong inputkan assign to!",
                                  },
                                ]}
                              >
                                <Select
                                  mode="multiple"
                                  showSearch
                                  placeholder="Pilih Assign To"
                                  optionFilterProp="children"
                                  filterOption={(input, option) =>
                                    (option?.label ?? "").includes(input)
                                  }
                                  options={
                                    dataDepartmentEmail
                                      ? dataDepartmentEmail
                                      : null
                                  }
                                />
                              </Form.Item>
                            </>
                          ))}
                          <Form.Item label="Tambah Escalation">
                            <Button
                              type="dashed"
                              onClick={add}
                              block
                              icon={<PlusOutlined />}
                            >
                              Add Escalation
                            </Button>
                          </Form.Item>
                        </>
                      );
                    }}
                  </Form.List>
                </>
              ) : null
            ) : null}

            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Tolong inputkan solution!",
                },
              ]}
              label="Solution"
              name="solution"
            >
              <TextArea style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              l
              rules={[
                {
                  required: true,
                  message: "Tolong inputkan customer response!",
                },
              ]}
              abel="Customer Response"
              name="customer_response"
            >
              <TextArea style={{ width: "100%" }} />
            </Form.Item>

            <Divider />
            <List
              size="small"
              header={<div>Ticket Response History</div>}
              footer={false}
              bordered
              dataSource={data ? data.ticket_response_history : null}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider />
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Tolong inputkan PIC Response!",
                },
              ]}
              label="PIC Response :"
              name="pic_response"
            >
              <TextArea style={{ width: "100%" }} />
            </Form.Item>
          </Form>
        </Space>
      </Spin>
    </Modal>
  );
}
