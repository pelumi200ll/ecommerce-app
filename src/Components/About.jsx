import { CiTimer } from "react-icons/ci";
import { BiBusSchool } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";
import Container from "./shared/Container";

function About() {
  return (
    <Container>
      <div className="flex flex-wrap justify-around items-center gap-3 mt-12 mb-12 mmyy">
        <div className="border border-[#0B4F6C] py-20 text-center h-[300px] w-[300px] rounded-full">
          <div className="flex justify-center">
            <CiTimer size={28} fontWeight={700} />
          </div>
          <div>
            <h5>24/7 delivery</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="border mx-auto border-[#0B4F6C] py-20 text-center h-[300px] w-[300px] rounded-full">
          <div className="flex justify-center">
            <h1>
              <BiBusSchool size={28} fontWeight={700} />
            </h1>
          </div>
          <div>
            <h5>24/7 delivery</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="border border-[#0B4F6C] py-20 text-center h-[300px] w-[300px] rounded-full">
          <div className="flex justify-center">
            <FaCalendarAlt size={28} fontWeight={700} />
          </div>
          <div>
            <h5>Time</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
