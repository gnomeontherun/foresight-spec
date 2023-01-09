import { ForesightAuthor } from "./author";
import { ForesightTrend } from "./trend";
import { ForesightScanhit } from "./scanhit";
import { ForesightDriver } from "./driver";
import { ForesightScenario } from "./scenario";
import { ForesightOption } from "./option";

export interface Foresight {
  title: string;
  author?: ForesightAuthor | ForesightAuthor[];
  created?: Date; 
  updated?: Date;
  website?: string;
  
  trends?: ForesightTrend[];
  scanhits?: ForesightScanhit[];
  drivers?: ForesightDriver[];
  scenarios?: ForesightScenario[];
  options?: ForesightOption[];
}