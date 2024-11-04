
import Section from "./components/Section/page";


export default function Home() {
  return (
    <div className="bg-white text-black  font-sans flex flex-col">
      <br /><br /><br /><br /><br /><br />

      <div className="flex px-[120px]">

        <div className=" flex text-6xl font-medium w-[360px]">Hello, I’m Mehmet Akif.</div>
        <div className="text-[32px] font-normal flex w-[580px] text-right text-[#606060]"> <br /> A senior-year design student who trying to specialize in 3D modeling & texturing.</div>

      </div>

      <br /><br /><br /><br />
      <div className="px-[120px]">
        <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg></p>
      </div> 
      <br /><br /> <br />
    <div className="flex flex-col gap-[100px]">
      <Section nmbr={1} description="Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development." subtext="Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold." _link_="More shots from this project →"/>

      <Section nmbr={2} description="Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques." _link_="See case study →" subtext=""/>

      <Section nmbr={3} description="Experimental creature modeling for school project." _link_="Project WIP →" subtext=""/>
    </div>
      
      <br /><br /><br /><br /><br /><br />
      
    </div>

  );
}
