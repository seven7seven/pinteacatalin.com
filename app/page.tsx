import LayoutWrapper from "@/components/layout-wrapper";
import Blocks from "@/components/blocks";

export default function HomePage() {
  return (
    <LayoutWrapper>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 items-center max-w-4xl mx-auto px-4">
        <div className="flex justify-center">
          <Blocks nRows={3} nCols={2} />
        </div>
        <div className="max-w-[280px] mx-auto tablet:max-w-none tablet:mx-0 text-left tablet:text-left">
          <p>Hi! 👋</p>
          <p>I'm an entrepreneur & designer from Cluj-Napoca.</p>
          <p>
            I love shipping delightful products through business aware design,
            and love empowering people to build their dreams.
          </p>
          <p>
            Currently improving the way real estate is transactioned{" "}
            <a
              href="https://www.crmrebs.ro/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @REBS
            </a>
            .
          </p>
          <p>
            This is a living experiment and{" "}
            <a
              href="https://github.com/seven7seven/pinteacatalin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              its source code is public
            </a>
            .
          </p>
          <p>
            Get in touch —{" "}
            <a
              href="mailto:catalin@rebs.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              catalin@rebs.ro
            </a>
          </p>
        </div>
      </div>
    </LayoutWrapper>
  );
}
