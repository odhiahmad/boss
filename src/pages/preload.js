import React, { useEffect } from "react";
import Image from "next/image";
import { Layout, Row, Button, Spin, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./../store";
import { useRouter } from "next/router";

function Preload() {
  const dispatch = useDispatch();

  const router = useRouter();

  const { appid, groupid, id } = router.query;
  const getTokenLoading = useSelector((state) => state.getToken.loading);
  useEffect(() => {
    const bodyGetToken = {
      user_app_id: appid,
      user_group_id: groupid,
      user_id: id,
    };
    dispatch(getToken(bodyGetToken));
  }, [getToken, dispatch, router]);

  const routeToTicket = () => {
    router.push(`/ticket?appid=${appid}&groupid=${groupid}&id=${id}`);
  };

  return (
    <Layout className="login" style={{ padding: 20, backgroundColor: "white" }}>
      <Spin spinning={getTokenLoading}>
        <Row justify="center" align="middle" style={{ margin: "5% auto" }}>
          <Image
            src={"/baf.svg"}
            width={133}
            height={133}
            layout={"fixed"}
            alt={"baf"}
          />
          <Divider />
          <Button
            onClick={routeToTicket}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Lanjut Ke Page Ticket
          </Button>
        </Row>
      </Spin>
    </Layout>
  );
}

export default Preload;
