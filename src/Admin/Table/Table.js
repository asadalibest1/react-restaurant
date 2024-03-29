import React from "react";
// import OnProcessOrdersTable from "./Tables/OnProcessOrders";
// import * as $ from "jquery";
// import noImagePreview from "../../img/noImagePreview.png"

export default function Table() {

  //   const [ShowPassword, setShowPassword] = React.useState(false)

  return (
    <div>

      <div class="container-fluid">
        {/* <!-- Page Heading --> */}
        <div className="row">
          <div className="col-md-1">
            <i class="fa fa-home fa-3x mt-1" aria-hidden="true"></i>
          </div>
          <div className="col-md-11">
            <h1 class="h3 mb-2 text-gray-800">Table</h1>
            <h6>Table</h6>
          </div>


          <div className="col-md-12 text-right px-4">
            <a href="#" class="btn btn-primary btn-icon-split btn-sm"
              data-toggle="modal" data-target="#addOrder"
            >
              <div class="d-flex align-items-center pl-2">
                <i class="fa fa-plus"></i>
              </div>
              <span class="text pl-1">New Order</span>
            </a>
          </div>


        </div>
        <p class="mb-4"></p>


        <div className="row d-flex justify-content-center">

        {/* {
                  Array.from(Array(15), () => {
                    return ( */}
                    
          <div className="mb-4 text-center mx-3">
            <div className="card bg-info text-white shadow d-inline-block text-left" style={{ width: "155px" }}>
              <div className="card-body py-2 px-3">

                <div className="text-white-50 small row">
                  {/* #36b9cc */}
                  <div className="col-md-12 d-flex">
                    <i class="fa fa-calendar-check h1" aria-hidden="true"></i>
                    {/* <div className="pl-1 d-flex align-items-center">Adil khan</div> */}
                    <div className="ml-auto h2">01</div>
                  </div>
                  <div className="col-md-6 font-weight-bold" style={{ fontSize: "12px" }}>
                    <i class="fa fa-users mr-1"></i>
                    3
                  </div>
                  <div className="col-md-6 text-right" style={{ fontSize: "10px" }}>
                    <i class="fa fa-clock mr-1"></i>
                    00:56
                  </div>
                  <small className="col-md-12 mt-1" style={{ fontSize: "10px" }}>
                    <i class="fa fa-user mr-1" aria-hidden="true"></i>
                    User Name</small>
                </div>
              </div>
            </div>
          </div>
         
          <div className="mb-4 text-center mx-3">
            <div className="card bg-light text-default shadow d-inline-block text-left" style={{ width: "155px" }}>
              <div className="card-body py-2 px-3">

                <div className="text-default  small row">
                  {/* #36b9cc */}
                  <div className="col-md-12 d-flex">
                    <i class="fa fa-clock h1" aria-hidden="true"></i>
                    {/* <div className="pl-1 d-flex align-items-center">Adil khan</div> */}
                    <div className="ml-auto h2">02</div>
                  </div>
                  <div className="col-md-6 font-weight-bold" style={{ fontSize: "12px" }}>
                    <i class="fa fa-users mr-1"></i>
                    3
                  </div>
                  <div className="col-md-6 text-right" style={{ fontSize: "10px" }}>
                    <i class="fa fa-clock mr-1"></i>
                    00:56
                  </div>
                  <small className="col-md-12 mt-1" style={{ fontSize: "10px" }}>
                    <i class="fa fa-user mr-1" aria-hidden="true"></i>
                    User Name</small>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4 text-center mx-3">
            <div className="card bg-dark text-white shadow d-inline-block text-left" style={{ width: "155px" }}>
              <div className="card-body py-2 px-3">

                <div className="text-white-50 small row">
                  {/* #36b9cc */}
                  <div className="col-md-12 d-flex">
                    <i class="fa fa-check-circle h1" aria-hidden="true"></i>
                    {/* <div className="pl-1 d-flex align-items-center">Adil khan</div> */}
                    <div className="ml-auto h2">03</div>
                  </div>
                  <div className="col-md-6 font-weight-bold" style={{ fontSize: "12px" }}>
                    <i class="fa fa-users mr-1"></i>
                    3
                  </div>
                  <div className="col-md-6 text-right" style={{ fontSize: "10px" }}>
                    <i class="fa fa-clock mr-1"></i>
                    00:56
                  </div>
                  <small className="col-md-12 mt-1" style={{ fontSize: "10px" }}>
                    <i class="fa fa-user mr-1" aria-hidden="true"></i>
                    User Name</small>
                </div>
              </div>
            </div>
          </div>

            {/* )
          })
        } */}

          {/* <div className="col-lg-3 mb-4 text-center">
                <div className="card bg-light text-black shadow d-inline-block text-left" style={{ width:"150px" }}>
                  <div className="card-body">
                    Light
                    <div className="text-black-50 small">#f8f9fc</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4 text-center">
                <div className="card bg-dark text-white shadow d-inline-block text-left" style={{ width:"150px" }}>
                  <div className="card-body">
                    Dark
                    <div className="text-white-50 small">#5a5c69</div>
                  </div>
                </div>
              </div> */}
        </div>

        {/* <!-- DataTales Example --> */}
        {/* <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
                On Process Orders
            </h6>
          </div>
          <div class="card-body">
            <div class={(window.innerWidth < 1000) ? "table-responsive" : ""}>

            <OnProcessOrdersTable />

            </div>
          </div>
        </div> */}


      </div>
      {/* // <!-- addOrder --> */}
      <div class="modal fade" id="addOrder" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-center modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Order</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body row">

              <div class="input-control mb-3 col-md-6">
                <label for="name">Invoice</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">INV#</span>
                  </div>
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="input-control mb-3 col-md-6">
                <label for="name">Table</label>
                <div class="input-group">
                  <select class="form-control">
                    <option value="table1">Table 1</option>
                    <option value="table2">Table 2</option>
                    <option value="table3">Table 3</option>
                    <option value="table4">Table 4</option>
                    <option value="table5">Table 5</option>
                    <option value="table6">Table 6</option>
                    <option value="table7">Table 7</option>
                    <option value="table8">Table 8</option>
                    <option value="table8">Table 8</option>
                    <option value="table9">Table 9</option>
                  </select>
                </div>
              </div>

              <div class="input-control mb-3 col-md-6">
                <label for="name">Total Item</label>
                <div class="input-group">
                  <input type="number" class="form-control" />
                </div>
              </div>

              <div class="input-control mb-3 col-md-6">
                <label for="name">Amount</label>
                <div class="input-group">
                  <input type="number" class="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                <i class="fa fa-plus mr-1" aria-hidden="true"></i>
                Add</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                <i class="fa fa-times mr-1" aria-hidden="true"></i>
                Close</button>                       </div>
          </div>
        </div>
      </div>
    </div>
  );
}
