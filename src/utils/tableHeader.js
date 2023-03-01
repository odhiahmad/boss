import { Button } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import moment from "moment";
moment.locale("id");

export const columnTable = (openModalView) => [
  {
    title: "Ticket Number",
    dataIndex: "id",
    key: "id",
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
    dataIndex: "contract_number",
    key: "contract_number",
    width: 180,
  },
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
    width: 160,
  },
  {
    title: "Reporter",
    dataIndex: "reporter_name",
    key: "reporter_name",
    width: 160,
  },
  {
    title: "Caller Number",
    dataIndex: "caller_number",
    key: "caller_number",
    width: 160,
  },
  {
    title: "Create Ticket Date",
    dataIndex: "created_at",
    key: "created_at",
    width: 200,
    render: (text, record) => <p>{moment(record.created_at).format("lll")}</p>,
  },
  {
    title: "Close Ticket Date",
    dataIndex: "close_ticket_date",
    key: "close_ticket_date",
    width: 160,
    render: (text, record) => (
      <p>
        {moment(record.close_ticket_date).format("lll") === "Invalid date"
          ? ""
          : moment(record.close_ticket_date).format("lll")}
      </p>
    ),
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
    render: (text, record) => {
      const created_date_temp = moment(record.created_at)
        .add(20, "days")
        .format("lll");

      return <p>{created_date_temp}</p>;
    },
  },
  {
    title: "SLA Penyelesaian",
    dataIndex: "sla_penyelesaian",
    key: "sla_penyelesaian",
    width: 160,
    render: (text, record) => {
      const created_date_temp = moment(record.close_ticket_date)
        .add(20, "days")
        .format("lll");

      return (
        <p>{created_date_temp === "Invalid date" ? "" : created_date_temp}</p>
      );
    },
  },
  {
    title: "Sisa SLA Penyelesaian",
    dataIndex: "sisa_sla_penyelesaian",
    key: "sisa_sla_penyelesaian",
    width: 190,
    render: (text, record) => {
      const a = moment(record.created_at).add(20, "days");
      const b = moment(record.created_at);

      return <p>{a.diff(b, "days")}</p>;
    },
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
    dataIndex: "updated_by",
    key: "updated_by",
    width: 160,
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 160,
    render: (text, record) => (
      <Button
        className="btn-primary"
        type="primary"
        onClick={() => openModalView(record)}
        icon={<FolderOutlined />}
      >
        Edit Data
      </Button>
    ),
  },
];
