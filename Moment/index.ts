import moment from "moment";

let now = moment();
//console.log(now instanceof moment);

class TimePower {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
  public now() {
    console.log(moment().format());
  }
  public nowInUnix() {
    console.log(moment().valueOf());
  }
  public nowInSecond() {
    console.log(moment().second());
  }
  public nowInMinute() {
    console.log(moment().minute());
  }
  public nowInHour() {
    console.log(moment().hour());
  }
}
const tp = new TimePower("1");
tp.now();
tp.nowInUnix();
tp.nowInHour();
tp.nowInMinute();
tp.nowInSecond();

console.log(moment(moment().valueOf()).second());
