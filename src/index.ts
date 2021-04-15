import movil from 'movil';
import Oper from 'oper';

export default function app(config: any) {

  let oper = new Oper();
  
  movil(config, oper)
  
}
