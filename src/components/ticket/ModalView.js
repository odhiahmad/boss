import React, { useState } from "react";
import {
    Modal,
    Form,
    Input,
    Row,
    Col,
    Button,
    Collapse,
    Space,
    Card,
    Checkbox
} from "antd";

export default function ModalForm({
    visible,
    onCancel,
    formType,
    onFinish,
    data,
    okButtonProps
}) {
    const [form] = Form.useForm();
    // const { Option } = Select
    const { TextArea } = Input;
    const { Panel } = Collapse;

    const [documentLinkEdit, setDocumentLinkEdit] = useState(false)
    return (
        <Modal
            centered
            title={"View Ticket"}
            visible={visible}
            onCancel={onCancel}
            width={"50%"}
            okButtonProps={okButtonProps}
            okText="Simpan"
            maskClosable={false}
        >
            <div>
                <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{
                            // requiredMarkValue: requiredMark,
                        }}

                    >
                        <Row justify="space-between" align="bottom">
                            <Col>
                                <Form.Item label="Ticket No :" name="ticket_no">
                                    <Input style={{ width: '100%' }} disabled={true} />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item label="Created Date :" name="created_date">
                                    <Input style={{ width: '100%' }} disabled={true} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label="Created By :" name="created_by">
                            <Input style={{ width: '100%' }} disabled={true} />
                        </Form.Item>
                        <Collapse ghost>
                            <Panel header="Ticket Info" key="1">
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Reporter Name :" name="reporter_name">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Caller Number :" name="caller_number">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Legal Phone :" name="legal_phone">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Contract Number :" name="contract_number">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Priority :" name="priority">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Customer Name :" name="customer_name">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item label="Document Link :" name="document_link">
                                    <Input style={{ width: '100%' }} disabled={documentLinkEdit ? false : true} />
                                </Form.Item>
                                <Form.Item
                                    name="document_needed"
                                    valuePropName="checked"
                                >
                                    <Checkbox>Document Needed</Checkbox>
                                </Form.Item>
                                <Row justify="space-between" align="bottom">
                                    <Space wrap>
                                        <Button type="primary" onClick={() => setDocumentLinkEdit(true)}>Edit</Button>
                                        <Button type="primary" onClick={() => setDocumentLinkEdit(false)} danger>Save</Button>
                                    </Space>

                                </Row>
                                <p></p>
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Reporting SLA :" name="reporting_sla">
                                            <Input style={{ width: '100%' }} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Resolution SLA :" name="resolution_sla">
                                            <Input style={{ width: '100%' }} />
                                        </Form.Item>
                                    </Col>

                                </Row>
                                <p>Case / Ticket Detail :</p>
                                <Card
                                    style={{
                                        width: 300,
                                    }}
                                >
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>

                            </Panel>
                            <Panel header="Case and Escalation Info" key="2">
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Category :" name="category">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Sub Category :" name="sub_category">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Summary Case :" name="summary_case">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Escalation / No Escalation :" name="escalation">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="Escalation To :" name="summary_case">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="Assign To - PIC 1 :" name="assign">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row justify="space-between" align="bottom">
                                    <Col>
                                        <Form.Item label="" name="summary_case">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                    <Col>
                                        <Form.Item label="" name="assign">
                                            <Input style={{ width: '100%' }} disabled={true} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Panel>
                            <Panel header="Resolution Info" key="3">
                                <p>Solution :</p>
                                <Card
                                    style={{
                                        width: 300,
                                    }}
                                >
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                                <p>Customer Response :</p>
                                <Card
                                    style={{
                                        width: 300,
                                    }}
                                >
                                    <p>Card content</p>
                                    <p>Card content</p>
                                    <p>Card content</p>
                                </Card>
                            </Panel>
                        </Collapse>
                        <Form.Item label="Ticket / Response History :" name="response_history">
                            <TextArea style={{ width: '100%' }} disabled={true} />
                        </Form.Item>
                        <Form.Item label="PIC Response :" name="pic_response">
                            <TextArea style={{ width: '100%' }} disabled={true} />
                        </Form.Item>

                    </Form>
                </Space>
            </div>
        </Modal>
    );
}
