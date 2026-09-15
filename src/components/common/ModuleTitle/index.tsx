type ModuleTitleProps = {
  title: string;
  subTitle?: string;
};

// 公共标题
export default function ModuleTitle(props: ModuleTitleProps) {
  const { title, subTitle } = props;
  return (
    <div className="flex items-center justify-center flex-col mobile:text-center mobile:px-3">
      <h2 className="h-auto leading-[1.3] mt-0 text-[40px] text-[#1d2129] mb-4 font-sans font-bold mobile:text-[28px]">
        {title}
      </h2>
      {subTitle && (
        <div className="font-sans text-[#424e66] tracking-normal leading-6 mb-8 max-w-[800px] mobile:text-[14px]">
          {subTitle}
        </div>
      )}
    </div>
  );
}
