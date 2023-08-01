export interface IElement {
  name: string;
  appearance: string;
  atomic_mass: number;
  boil: number;
  category: string;
  color: any;
  density: number;
  discovered_by: string;
  melt: number;
  molar_heat: number;
  named_by: string;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectral_img: string;
  summary: string;
  symbol: string;
  ":": number;
  ypos: number;
  shells: number[];
  electron_configuration: string;
  electron_configuration_semantic: string;
  electron_affinity: number;
  electronegativity_pauling: number;
  ionization_energies: number[];
  "cpk-hex": string;
}