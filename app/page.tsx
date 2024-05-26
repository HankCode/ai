import ContentContainer from "@/components/ContentContainer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <ContentContainer className="relative">
      <section className="relative z-30 mx-auto max-w-5xl md:pt-32 pt-20 text-center">
        <h1 className="text-[40px] md:text-[70px] font-semibold leading-[1.1] tracking-tighter">
          It is your <span className="">birthright</span>
          <br /> to live your <span className="">dreamlife</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md md:text-xl text-lg font-medium">
          A practical integration of the law of attraction
        </p>
        <Button size="lg" className="mt-8">
          <div className="flex items-center justify-center gap-x-3">
            <span>Start the journey</span>
            <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
          </div>
        </Button>
      </section>
      <img
        src="/img/homepage_cover_girl.png"
        alt="Image of a dreaming girl"
        className="z-10 mx-auto md:-mt-16 -mt-3 w-auto"
      />
      <section>
        <div className="mx-auto -mt-20 flex max-w-3xl flex-col gap-y-5 pb-32 text-4xl font-medium tracking-wide">
          {" "}
          <p>No matter what LoA you prefer.. be it Neville, Abraham, Bashar or Hicks.</p>
          <p>Many make the mistake of to much learning, and to little practice..</p>
          {/* <p>
            .. without ever really making the rewinding of the mind needed to
            start experimenting miracles.
          </p> */}
          <p>
            Its really sad, but most people give up on manifesting their dreams without ever
            starting to experiencing any miracles.
          </p>
          <p>..we want to change this.</p>
        </div>

        <div></div>
      </section>
    </ContentContainer>
  );
};

export default Home;
