import classNames from 'classnames';

type ActiveIconProps = {
  img: string;
  activeImg: string;
  className: string;
  text: string;
  href?: string;
  target?: string;
};

// 公共跳转按钮
export default function ActiveIcon(props: ActiveIconProps) {
  const { img, activeImg, className, text, href, target } = props;

  return (
    <a
      className={classNames(
        className,
        'group/icon inline-flex items-center justify-center',
      )}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
    >
      <img
        className="mr-[6px] group-hover/icon:hidden"
        src={img}
        alt="inactive_icon"
      />
      <img
        className="mr-[6px] hidden group-hover/icon:block"
        src={activeImg}
        alt="active_icon"
      />
      {text}
    </a>
  );
}
