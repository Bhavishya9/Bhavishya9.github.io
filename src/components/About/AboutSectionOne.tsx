import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "../Features/SingleFeature";
import { Feature } from "@/types/feature";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const plusIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current" preserveAspectRatio="none">
    <path d="M9 1.5C9 1.22386 8.77614 1 8.5 1H7.5C7.22386 1 7 1.22386 7 1.5V7H1.5C1.22386 7 1 7.22386 1 7.5V8.5C1 8.77614 1.22386 9 1.5 9H7V14.5C7 14.7761 7.22386 15 7.5 15H8.5C8.77614 15 9 14.7761 9 14.5V9H14.5C14.7761 9 15 8.77614 15 8.5V7.5C15 7.22386 14.7761 7 14.5 7H9V1.5Z" />
  </svg>
);


const export_countries:Feature[] = [
  {
    id: 1,
    title: "Japan",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="white"/>
        <circle cx="150" cy="100" r="60" fill="red"/>
      </svg>
    ),
    paragraph: ""
  },
  {
    id: 1,
    title: "Taiwan",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="red"/>
        <rect x="0" y="0" width="150" height="100" fill="blue"/>
        <circle cx="75" cy="50" r="25" fill="white"/>
        <g transform="translate(75, 50)">
          <g id="rays" fill="white">
            <polygon points="0,-25 2,-10 -2,-10"/>
            <polygon points="0,-25 10,-2 5,-2"/>
            <polygon points="0,-25 -10,-2 -5,-2"/>
            <polygon points="0,-25 5,-2 2,-10"/>
            <polygon points="0,-25 -5,-2 -2,-10"/>
            <polygon points="0,-25 2,-10 -2,-10"/>
            <polygon points="0,-25 2,10 -2,10"/>
            <polygon points="0,-25 10,2 5,2"/>
            <polygon points="0,-25 -10,2 -5,2"/>
            <polygon points="0,-25 5,2 2,10"/>
            <polygon points="0,-25 -5,2 -2,10"/>
            <polygon points="0,-25 2,10 -2,10"/>
          </g>
        </g>
      </svg>
    ),
    paragraph: ""
  },
  {
    id: 1,
    title: "USA",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="380" height="200" viewBox="0 0 760 400">
  
        <rect width="760" height="400" fill="red"/>
        <rect width="760" height="35" y="35" fill="white"/>
        <rect width="760" height="35" y="105" fill="white"/>
        <rect width="760" height="35" y="175" fill="white"/>
        <rect width="760" height="35" y="245" fill="white"/>
        <rect width="760" height="35" y="315" fill="white"/>
        <rect width="304" height="210" fill="navy"/>

  
        <g fill="white">    
          <g transform="translate(25, 17.5)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
            <circle r="10" cx="300" cy="0"/>
          </g>
    
          <g transform="translate(50, 35)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
          </g>
    
          <g transform="translate(25, 52.5)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
            <circle r="10" cx="300" cy="0"/>
          </g>
          <g transform="translate(50, 70)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
          </g>
          <g transform="translate(25, 87.5)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
            <circle r="10" cx="300" cy="0"/>
          </g>
          <g transform="translate(50, 105)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
          </g>
          <g transform="translate(25, 122.5)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
            <circle r="10" cx="300" cy="0"/>
          </g>
          <g transform="translate(50, 140)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
          </g>
          <g transform="translate(25, 157.5)">
            <circle r="10" cx="50" cy="0"/>
            <circle r="10" cx="100" cy="0"/>
            <circle r="10" cx="150" cy="0"/>
            <circle r="10" cx="200" cy="0"/>
            <circle r="10" cx="250" cy="0"/>
            <circle r="10" cx="300" cy="0"/>
          </g>
        </g>
      </svg>

    ),
    paragraph: ""
  },
  {
    id: 1,
    title: "China",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="red"/>
        <polygon points="30,20 37.5,40 60,40 42.5,55 50,75 30,60 10,75 17.5,55 0,40 22.5,40" fill="yellow"/>
        <polygon points="68,15 71,22.5 78.5,22.5 72.5,27.5 75,35 68,30 61,35 63.5,27.5 57.5,22.5 65,22.5" fill="yellow" transform="rotate(30, 68, 22.5)"/>
        <polygon points="88,30 91,37.5 98.5,37.5 92.5,42.5 95,50 88,45 81,50 83.5,42.5 77.5,37.5 85,37.5" fill="yellow" transform="rotate(10, 88, 37.5)"/>
        <polygon points="88,60 91,67.5 98.5,67.5 92.5,72.5 95,80 88,75 81,80 83.5,72.5 77.5,67.5 85,67.5" fill="yellow" transform="rotate(-10, 88, 67.5)"/>
        <polygon points="68,75 71,82.5 78.5,82.5 72.5,87.5 75,95 68,90 61,95 63.5,87.5 57.5,82.5 65,82.5" fill="yellow" transform="rotate(-30, 68, 82.5)"/>
      </svg>
    ),
    paragraph: ""
  }
]



const AboutSectionOne = () => {
  const List = ({ text, icon=checkIcon, bold=false }) => (
    <p className={`mb-5 flex items-center text-lg text-body-color ${bold ? 'font-bold' : 'font-medium'}`}>
      <span className="mr-4 flex-none h-[30px] w-[30px] flex items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {icon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="offering" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Unmatched Scientific Expertise & State-of-the-Art Manufacturing"
                paragraph="We have the scientific strength, knowledge, expertise and infrastructure to manufacture any kind of intermediates. Our manufacturing facility with over 14 Reactors and supporting utility facilities at APIIC-APSEZ, Atchuthapuram, Visakhapatam , Andhra Pradesh"
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="3,4-Dimethoxy Thiophene (DMOT)" />
                    <List text="3,4-Ethylenedioxy Thiophene (EDOT)" />
                    <List text="2-Butyl-3,4-Ethylenedioxy Thiophene (Butyl-EDOT)" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="2-Ethyl-3,4-Ethylenedioxy Thiophene (Et-EDOT)" />
                    <List text="Hydroxymethyl EDOT (HMEDOT)" />
                    <a href="products"><List text="...More" icon={plusIcon} bold={true}/></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/powder.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/powder.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
          <div className="-mz-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle title="Exports" paragraph="We currently support the export of Electronic chemicals to the following countries, with plans to expand to more regions in the near future." mb="44px" />
              <div 
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                <div className="grid grid-cols-1 gap-x-20 gap-y-14 md:grid-cols-2 lg:grid-cols-4">

                {export_countries.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
