import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Col,
  Spin,
  Button,
  DatePicker,
  Divider,
} from "antd";

const dayjs = require("dayjs");
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function ModalForm({
  visible,
  onCancel,
  formType,
  onFinish,
  okButtonProps,
  loading,
  getCustomerData,
  getSubCategoryData,
  getDepartmentEmailData,
  dataCategory,
  dataSubCategory,
  dataPriority,
  dataSummaryCase,
  dataDepartment,
  dataDepartmentEmail,
  dataCustomer,
}) {
  const [form] = Form.useForm();
  const [contractNumber, setContractNumber] = useState("");
  const [escalation, setEscalation] = useState("902");
  const { TextArea } = Input;

  const a = dayjs();
  const b = a.add(20, "day");

  const getCustomer = () => {
    getCustomerData(contractNumber);
  };

  const onChangeContractNumber = (e) => {
    setContractNumber(e.target.value);
  };

  useEffect(() => {
    if (dataCustomer) {
      form.setFieldsValue({
        legal_phone: dataCustomer.legal_phone,
        customer_name: dataCustomer.name,
      });
    }
  }, [dataCustomer]);

  return (
    <Modal
      centered
      title={formType === "add" ? "Ticket Baru" : "Edit Ticket"}
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
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          form={form}
          onFinish={onFinish}
          id="formPengiriman"
          autoComplete="off"
        >
          <Form.Item
            label="Caller Number"
            name="caller_number"
            rules={[
              { required: true, message: "Tolong inputkan Caller Number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Reporter Name"
            name="reporter_name"
            rules={[
              { required: true, message: "Tolong inputkan Reporter Name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contract Number"
            name="contract_number"
            rules={[
              { required: true, message: "Tolong inputkan Contract Number!" },
            ]}
          >
            <Row justify="space-between">
              <Col>
                <Input onChange={onChangeContractNumber} />
              </Col>
              <Col>
                <Button onClick={getCustomer} type="primary">
                  Get Customer Data
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            label="Customer Name"
            name="customer_name"
            rules={[
              { required: true, message: "Tolong inputkan Customer Name!" },
            ]}
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            label="Legal Phone"
            name="legal_phone"
            rules={[
              { required: true, message: "Tolong inputkan Legal Phone!" },
            ]}
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Tolong inputkan Category!" }]}
          >
            <Select
              showSearch
              onChange={getSubCategoryData}
              placeholder="Pilih Category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              options={dataCategory ? dataCategory : null}
            />
          </Form.Item>
          <Form.Item
            label="Sub Category"
            name="sub_category"
            rules={[
              { required: true, message: "Tolong inputkan Sub Category!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Pilih Sub Category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              options={dataSubCategory ? dataSubCategory : null}
            />
          </Form.Item>
          <Form.Item
            label="Summary Case"
            name="summary_case"
            rules={[
              { required: true, message: "Tolong inputkan Summary Case!" },
            ]}
          >
            <Select
              showSearch
              placeholder="Pilih Summary Case"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              options={dataSummaryCase ? dataSummaryCase : null}
            />
          </Form.Item>
          <Form.Item
            label="Document Link"
            name="link_attachment"
            rules={[
              { required: true, message: "Tolong inputkan Document Link!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Response Due Date"
            name="response_due_date"
            rules={[
              { required: true, message: "Tolong inputkan response due date!" },
            ]}
            initialValue={b}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Priority"
            name="priority"
            rules={[{ required: true, message: "Tolong inputkan Priority!" }]}
          >
            <Select
              showSearch
              placeholder="Pilih Priority"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              options={dataPriority ? dataPriority : null}
            />
          </Form.Item>
          <Form.Item></Form.Item>
          <Form.Item
            label="Close Due Date"
            name="close_due_date"
            rules={[
              { required: true, message: "Tolong inputkan close due date!" },
            ]}
            initialValue={b}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Case / Ticket Detail"
            name="case_ticket_detail"
            rules={[
              {
                required: true,
                message: "Tolong inputkan case / ticket detail !",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Divider />
          <Form.Item
            label="Escalation/No Escalation"
            name="escalation"
            rules={[
              {
                required: true,
                message: "Tolong inputkan escalation!",
              },
            ]}
            initialValue={"902"}
          >
            <Select
              showSearch
              placeholder="Pilih Escalation"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              onChange={(e) => setEscalation(e)}
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

          {escalation === "902" ? (
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
                              options={dataDepartment ? dataDepartment : null}
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
                                dataDepartmentEmail ? dataDepartmentEmail : null
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
          ) : null}
          <Divider />
          <Form.Item
            label="Reporting SLA"
            name="reportingSla"
            rules={[
              {
                message: "Tolong inputkan reporting sla!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Resolution SLA"
            name="resolution_sla"
            rules={[{ message: "Tolong inputkan resolution SLA!" }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Solution"
            name="solution"
            rules={[{ required: true, message: "Tolong inputkan solution!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Customer Response"
            name="customer_response"
            rules={[
              { required: true, message: "Tolong inputkan customer response!" },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}
