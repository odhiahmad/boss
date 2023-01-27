import React from "react";
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
} from "antd";

export default function ModalForm({
	visible,
	onCancel,
	formType,
	onFinish,
	okButtonProps,
	loading,
}) {
	const [form] = Form.useForm();
	// const { Option } = Select
	const { TextArea } = Input;

	return (
		<Modal
			centered
			title={formType === "add" ? "Ticket Baru" : "Edit Ticket"}
			visible={visible}
			onCancel={onCancel}
			width={"50%"}
			okButtonProps={okButtonProps}
			okText="Simpan"
			maskClosable={false}
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
					<Form.Item hidden={true} name="id" initialValue={formType}>
						<Input />
					</Form.Item>
					<Form.Item hidden={true} name="formType" initialValue={formType}>
						<Input />
					</Form.Item>

					<Form.Item
						label="Caller Number"
						name="callerNumber"
						rules={[
							{ required: true, message: "Tolong inputkan Caller Number!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Contract Number"
						name="contractNumber"
						rules={[
							{ required: true, message: "Tolong inputkan Contract Number!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Customer Name"
						name="customerName"
						rules={[
							{ required: true, message: "Tolong inputkan Customer Name!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Reporter Name"
						name="reporterName"
						rules={[
							{ required: true, message: "Tolong inputkan Reporter Name!" },
						]}
					>
						<Row justify="space-between">
							<Col><Input style={{ width: '100%' }} /></Col>
							<Col><Button type="primary">Get Customer Data</Button></Col>
						</Row>
					</Form.Item>
					<Form.Item
						label="Legal Phone"
						name="legalPhone"
						rules={[
							{ required: true, message: "Tolong inputkan Reporter Name!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Category"
						name="category"
						rules={[
							{ required: true, message: "Tolong inputkan Category!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Category"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item
						label="Summary Case"
						name="summaryCase"
						rules={[
							{ required: true, message: "Tolong inputkan Summary Case!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Summary Case"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>å
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item
						label="Document Link"
						name="documentLink"
						rules={[
							{ required: true, message: "Tolong inputkan Document Link!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Response Due Date"
						name="responseDueDate"
						rules={[
							{ required: true, message: "Tolong inputkan response due date!" },
						]}
					>
						<DatePicker style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item
						label="Sub Category"
						name="subCategory"
						rules={[
							{ required: true, message: "Tolong inputkan Sub Category!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Sub Category"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item
						label="Priority"
						name="priority"
						rules={[
							{ required: true, message: "Tolong inputkan Priority!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Priority"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item>

					</Form.Item>
					<Form.Item
						label="Close Due Date"
						name="closeDueDate"
						rules={[
							{ required: true, message: "Tolong inputkan close due date!" },
						]}
					>
						<DatePicker style={{ width: '100%' }} />
					</Form.Item>
					<Form.Item
						label="Escalation/No Escalation"
						name="escalation"
						rules={[
							{ required: true, message: "Tolong inputkan escalation atau tidak!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Jenis Escalation"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item
						label="Case / Ticket Detail"
						name="case"
						rules={[
							{ required: true, message: "Tolong inputkan escalation atau tidak!" },
						]}
					>
						<TextArea rows={4} />
					</Form.Item>


					<Form.Item
						label="Escalation to"
						name="escalationTo"
						rules={[
							{ required: true, message: "Tolong inputkan escalation atau tidak!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Escalation"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item
						label="Reporting SLA"
						name="reportingSla"
						rules={[
							{ required: true, message: "Tolong inputkan escalation atau tidak!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Assign to"
						name="escalationTo"
						rules={[
							{ required: true, message: "Tolong inputkan assign to!" },
						]}
					>
						<Select
							showSearch
							placeholder="Pilih Assign To"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.children
									.toLowerCase()
									.indexOf(input.toLowerCase()) >= 0
							}
						>
							{/* {dataSupplier.map((item, index) => ( */}
							{/* <Option key={item.id} value={index}>
												{item.name}
											</Option> */}
							{/* ))} */}
						</Select>
					</Form.Item>
					<Form.Item
						label="Resolution SLA"
						name="resolutionSla"
						rules={[
							{ required: true, message: "Tolong inputkan resolution SLA!" },
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						label="Solution"
						name="solution"
						rules={[
							{ required: true, message: "Tolong inputkan solution!" },
						]}
					>
						<TextArea rows={4} />
					</Form.Item>
					<Form.Item
						label="Customer Response"
						name="customerResponse"
						rules={[
							{ required: true, message: "Tolong inputkan customerResponse!" },
						]}
					>
						<TextArea rows={4} />
					</Form.Item>

				</Form>
			</Spin>

		</Modal>
	);
}
