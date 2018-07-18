import { Address } from '../shared/Address.model';
export class Contact {
  public name: string;
  public number: string;
  public email: string;
  public nickname: string;
  public gender: string;
  public imagePath: string;
  public address: Address [];

  constructor(name: string, number: string, imagePath: string, email: string, nickname: string, gender: string,
     addresss: Address[]) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.nickname = nickname;
    this.gender = gender;
    this.imagePath = imagePath;
    this.address = addresss;
  }
}
