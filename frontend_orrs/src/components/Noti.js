import React, { Component } from "react";

class Noti extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }
  async componentDidMount() {

    const data = await fetch("http://localhost:9055/user/notification", {
      method: "GET",
    });

    const res = await data.text();
    if (res === "[]") {
      this.setState({ traintickets:["No new trains added yet ... :("] });
    } else {
      console.log(eval(JSON.parse(JSON.stringify(res))));
      this.setState({ traintickets: eval(JSON.parse(JSON.stringify(res))) });
    }
  }

  render() {
    return (
      <div>
        <h3> Notifications </h3>
        {
          this.state.traintickets.map((e)=>{
            return(
              <div className="alert alert-info mx-5 " role="alert" style={{backgroundColor:"whitesmoke"}}>
          {e}
        </div>
            )
          })
        }
      </div>
    );
  }
}

export default Noti;

