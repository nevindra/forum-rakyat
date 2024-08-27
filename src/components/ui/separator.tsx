export const Separator = ({ text }: { text: string }) => (
  <div className="relative">
    <div className="relative flex items-center">
      <div className="grow border-t border-[#00200F0F] border-opacity-60"></div>
      <p className="mx-3 shrink text-xs  text-[#00200F7A] font-geist-sans">
        {text}
      </p>
      <div className="grow border-t border-[#5ebe8b0f] border-opacity-60"></div>
    </div>
  </div>
)
