import styles from './index.module.less';

type ModuleTitleProps = {
  title: string;
  subTitle?: string;
};

// 公共标题
export default function ModuleTitle(props: ModuleTitleProps) {
  const { title, subTitle } = props;
  return (
    <div className={styles.msg}>
      <h2 className={styles.title}>{title}</h2>
      {subTitle && <div className={styles.subTitle}>{subTitle}</div>}
    </div>
  );
}
