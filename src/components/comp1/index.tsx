import $styles from "./index.module.scss";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const Comp1 = () => {
  return (
    <div className={$styles.box}>
      Comp122
      <HomeOutlined />
      <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoadingOutlined />
    </div>
  );
};

export default Comp1;
