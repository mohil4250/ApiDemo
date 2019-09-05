import React from 'react';
import './Megamenu.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MegaMenu extends React.Component {

  state = {
    Catagaries: [],
    Product: [],
    subcategory: [],
    loading: true,
  }
  componentDidMount() {
    axios.get(`/live/item`).then(res => {
      this.setState({ Catagaries: res.data.Items })
    })
    axios.get(`live/cart`).then(res => {
      this.setState({ Product: res.data.Items })
    })
  }

  getid(cat_id) {
    const rolenames = this.state.Product.filter(function (item) {
      if (item.cat_id === cat_id) {
        return true; // skip
      }
      return false;
    });
    this.setState({ subcategory: rolenames })
  }

  render() {
    return (
      <div className="navbar2">
        <div className="container1">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 p-0">
            {this.state.Catagaries.map(el => (
              <div className="dropdown2 mard">
                {/* loop strat here */}
                <div>

                  <label className="dropbtn2" onMouseEnter={() => this.getid(el.cat_id)}> {el.cat_name} <i className="fa fa-angle-down fa-set"></i> </label>
                  <div className="dropdown-content2">
                    <div className="column2">
                      <div className="row" style={{ margin: '0' }}>
                        {this.state.subcategory.map(sc => (
                          <div className="col-lg-3 col-md-3 col-sm-3 col-3 ">
                            <div className="megaheadersetting">{sc.sub_category}
                              <Link to="/product" className="text-muted">{sc.prod_title}</Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MegaMenu;
