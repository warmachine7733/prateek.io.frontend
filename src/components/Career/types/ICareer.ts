import ISelectedCareerData from "./ISelectedCareerData";

interface ICareer {
  selectedCareerData: ISelectedCareerData[];
  selectedCareerTab: String;
  showCareerData: Function;
}

export default ICareer;