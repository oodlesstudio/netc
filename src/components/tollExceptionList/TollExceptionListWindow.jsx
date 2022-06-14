import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import Chart from "react-apexcharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TollExceptionListWindow = () => {
  window.dispatchEvent(new Event("resize"));

  const options = {
    chart: {
      height: "100%",
      width: "100%",
      type: "donut",
    },
    labels: ["Low Balance", "Exempted Vehicle Class", "Black List"],
    dataLabels: {
      enabled: false,
    },
    colors: ["#F2D477", "#91C48F", "#FFADAD"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "70px",
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fonttSize: "24px",
            },
          },
        },
      },
    },
    responsive: [
      // {
      //   breakpoint: 370,
      //   options: {
      //     chart: {
      //       height: 330,
      //       width: 330,
      //     },
      //   },
      // },
      {
        breakpoint: 350,
        options: {
          chart: {
            height: 300,
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 320,
        options: {
          chart: {
            height: 300,
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [20, 10, 10];

  // Select Error

  const options2 = [
    { value: "1", label: "option" },
    { value: "2", label: "option" },
    { value: "3", label: "option" },
    { value: "4", label: "option" },
  ];

  //   Date Calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="configLeft identificationContainer">
      {/* Breadcrumb */}
      <div className="d-flex justify-content-between align-items-center breadcrumbHeading">
        <h5 className="fontWeight-600 fileConfigHead colorBlack">
          Toll Exception List
        </h5>
        <div className="d-flex align-items-center">
          <Link to="/">
            <p className="fontSize12 colorPrimaryDefault">Home</p>
          </Link>
          <Link to="/">
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </Link>
          <p className="fontSize12">Dashboard</p>
          <span>
            <svg
              width="8"
              height="100%"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-1"
            >
              <path
                d="M3 4L7 8L3 12"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="breadcrumbIcon"
              />
            </svg>
          </span>
          <p className="fontSize12">Toll Exception List</p>
        </div>
      </div>
      {/* Table Boxes */}
      <div className="TollExceptionWrapper">
        <div className="exceptionBox piechart">
          <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height="100%"
          />
        </div>
        <div className="exceptionBox tableBorderBox smalltable">
          <div>
            <div>
              {/* Table */}
              <div className="table-responsive tableContentBox">
                <table className="table table-initial-width aeps-table table-striped table-hover table-borderless align-middle">
                  <thead>
                    <tr>
                      <th scope="col" className="px-0">
                        Exception Code
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Exception Description
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        Total Tag IDs
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                      <th scope="col">
                        NPCI Last Updated At
                        <Link to="/">
                          <span className="icon-Sort-icon"></span>
                        </Link>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-0">
                        <div className="exceptionCodeWrapper">
                          <span className="exceptionCode pink"></span>
                          <span>03</span>
                        </div>
                      </td>
                      <td>Low Balance</td>
                      <td className="totalTagIdText">20</td>
                      <td>20-02-2022, 12:00</td>
                    </tr>
                    <tr>
                      <td className="px-0">
                        <div className="exceptionCodeWrapper">
                          <span className="exceptionCode green"></span>
                          <span>02</span>
                        </div>
                      </td>
                      <td>Exempted Vehicle Class</td>
                      <td className="totalTagIdText">10</td>
                      <td>20-02-2022, 12:00</td>
                    </tr>
                    <tr>
                      <td className="px-0">
                        <div className="exceptionCodeWrapper">
                          <span className="exceptionCode yellow"></span>
                          <span>01</span>
                        </div>
                      </td>
                      <td>Black List</td>
                      <td className="totalTagIdText">10</td>
                      <td>20-02-2022, 12:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Double Table */}
      <div className="tableBorderBox doubleTable">
        {/* Heading */}
        <div className="HeaderDouble">
          <p className="HeaderDoubleHeading">Exception List</p>
          <div className="HeaderSubDouble">
            <div className="tollDateWrapper">
              <div className="clientNameSelect tollDate">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="unmatchedDate"
                />
              </div>
              <div className="clientNameSelect tollDate">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="unmatchedDate"
                />
              </div>
            </div>

            <div className="clientNameSelect tollStatus">
              <Select
                options={options2}
                id="concName"
                classNamePrefix="reactSelectBox"
                placeholder="Select"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive tableContentBox">
          <table className="table table-initial-width aeps-table table-striped table-hover table-borderless align-middle">
            <thead>
              <tr>
                <th scope="col" colSpan="3" className="px-0 table-right-border">
                  Exception Code
                </th>
                <th scope="col" className="table-right-border">
                  Total No. of Tags
                  <Link to="/">
                    <span className="icon-Sort-icon"></span>
                  </Link>
                </th>
                <th scope="col" className="table-right-border">
                  NPCI Last Updated DateTime
                  <Link to="/">
                    <span className="icon-Sort-icon"></span>
                  </Link>
                </th>
                <th scope="col">
                  Status
                  <Link to="/">
                    <span className="icon-Sort-icon"></span>
                  </Link>
                </th>
              </tr>
              <tr>
                <th className="p-0 table-right-border table-top-border">03</th>
                <th className="table-right-border table-top-border">02</th>
                <th className="table-right-border table-top-border">01</th>
                <th className="table-top-border table-right-border"></th>
                <th className="table-top-border table-right-border"></th>
                <th className="table-top-border"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox yellow">20</div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox green">20</div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox pink">20</div>
                  </div>
                </td>
                <td>60</td>
                <td>20-02-2022, 12:00:00</td>
                <td className="statusSuccessText">Success</td>
              </tr>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox yellow">20</div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox green">20</div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox pink">20</div>
                  </div>
                </td>
                <td>60</td>
                <td>20-02-2022, 12:00:00</td>
                <td className="statusSuccessText">Success</td>
              </tr>
              <tr>
                <td className="px-0">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox yellow">20</div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox green">20</div>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="exceptionCodeBox pink">20</div>
                  </div>
                </td>
                <td>60</td>
                <td>20-02-2022, 12:00:00</td>
                <td className="statusSuccessText">Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TollExceptionListWindow;
