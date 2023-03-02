import { MiEtiquetaComponent } from "./mi-etiqueta.component";

export interface MiEtiquetaEventInterface {
    getMessage(): string;
    getTarget(): MiEtiquetaComponent;
    getTimestamp(): number;
}