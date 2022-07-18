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
  public nowInUnixMilliseconds() {
    console.log(moment().valueOf());
  }
  public nowInUnixSecond() {
    console.log(moment().unix());
  }
  public today() {
    console.log(moment().format("dddd"));
  }
  public thisMonth() {
    console.log(moment().format("MMMM"));
  }
  public thisYear() {
    console.log(moment().format("YYYY"));
  }
  public thisDayOfMonth() {
    console.log(moment().format("DD"));
  }
}

const tp = new TimePower("1000");
tp.thisDayOfMonth();
