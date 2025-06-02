import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button, Box, TextField, Container, Typography } from "@mui/material";
import EaristLogo from "../assets/EaristLogo.png";
import { jwtDecode } from "jwt-decode";
import ForwardIcon from '@mui/icons-material/Forward';

const AdmissionFormProcess = () => {
  const getPersonIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token);
      console.log("Decoded Token: ", decoded);
      return decoded.person_id; // Ensure your token includes this
    }
    return null;
  };

  const divToPrintRef = useRef();

  const printDiv = () => {
    const divToPrint = divToPrintRef.current;
    if (divToPrint) {
      const newWin = window.open('', 'Print-Window');
      newWin.document.open();
      newWin.document.write(`
      <html>
        <head>
          <title>Print</title>
       <style>
  @page {
    size: Legal;
    margin: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 210mm;
    height: 297mm;
    font-family: Arial, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

.print-container {
  width: 100%;
  height: auto;
  padding: 10px 20px;
}

  .student-table {
    margin-top: 0 !important;
  }

  button {
    display: none;
  }

    .student-table {
    margin-top: -40px !important;
  }

  svg.MuiSvgIcon-root {
  margin-top: -53px;
    width: 70px !important;
    height: 70px !important;
  }
</style>

        </head>
        <body onload="window.print(); setTimeout(() => window.close(), 100);">
          <div class="print-container">
            ${divToPrint.innerHTML}
          </div>
        </body>
      </html>
    `);
      newWin.document.close();
    } else {
      console.error("divToPrintRef is not set.");
    }
  };



  return (
    <Box sx={{ height: 'calc(100vh - 120px)', overflowY: 'auto', paddingRight: 1, backgroundColor: 'transparent' }}>
      <Container>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", textAlign: "Left", color: "maroon", marginTop: "25px" }}> ADMISSION FORM (PROCESS)</h1>
        <hr style={{ border: "1px solid #ccc", width: "50%" }} />
        <button
          onClick={printDiv}
          style={{
            marginBottom: "1rem",
            padding: "10px 20px",
            border: "2px solid black",
            backgroundColor: "#f0f0f0",
            color: "black",
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#d3d3d3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Print Table
        </button>
      </Container>


      <Container>



        <div ref={divToPrintRef}>

          <Container>

            <div style={{
              width: "8in", // matches table width assuming 8in for 40 columns
              maxWidth: "100%",
              margin: "0 auto", // center the content
              fontFamily: "Times New Roman",
              boxSizing: "border-box",
              padding: "10px 0", // reduced horizontal padding

            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                {/* Logo */}
                <div style={{ flexShrink: 0, marginRight: "20px" }}>
                  <img
                    src={EaristLogo}
                    alt="Earist Logo"
                    style={{ width: "120px", height: "120px", objectFit: "contain", marginLeft: "10px", marginTop: "-25px" }}
                  />
                </div>



                <div style={{
                  flexGrow: 1,
                  textAlign: "center",
                  fontSize: "12px",
                  fontFamily: "Arial",
                  letterSpacing: "5",
                  lineHeight: 1.4,
                  paddingTop: 0,
                  paddingBottom: 0
                }}>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", fontsize: "12px", }}>Republic of the Philippines</div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", letterSpacing: '2px' }}><b>EULOGIO "AMANG" RODRIGUEZ </b></div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", letterSpacing: '2px' }}><b>INSTITUTE OF SCIENCE AND TECHNOLOGY</b></div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", fontSize: "12px" }}>Nagtahan, Sampaloc, Manila 1008</div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", letterSpacing: '1px', }}><b>OFFICE OF THE ADMISSION SERVICES</b></div>
                  <br />

                  <div style={{
                    fontSize: "21px",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    marginTop: "0",
                    marginLeft: "-145px",
                    textAlign: "center",
                  }}>
                    Admission Form (Process)
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <table
            className="student-table"
            style={{
              borderCollapse: "collapse",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "8in",
              margin: "0 auto",

              textAlign: "center",
              tableLayout: "fixed",
            }}
          >

            <tbody>
              <tr>
                <tr>
                  <td colSpan="40" style={{ height: "20px" }}></td>
                </tr>

                <tr>
                  <td colSpan="40" style={{ height: "20px" }}></td>
                </tr>
                <td
                  colSpan={40}
                  style={{
                    fontFamily: "Times New Roman",
                    fontSize: "16px",
                    paddingTop: "5px",  // you can reduce this if needed
                    marginTop: 0,
                  }}
                >
                  <span style={{ fontWeight: "bold", marginRight: "10px", marginLeft: "-5px" }}>
                    Name of Student:
                  </span>{" "}
                  <span
                    style={{
                      display: "inline-block",
                      borderBottom: "1px solid black",
                      width: "82%",
                      paddingLeft: "10px",
                    }}
                  >
                    {/* Full name goes here */}
                  </span>
                </td>
              </tr>


              <tr>
                <td colSpan={40} style={{ fontFamily: "Times New Roman", fontSize: "14px", paddingTop: "2px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginLeft: "120px" }}>

                    <span>Last Name</span>
                    <span>Given Name</span>
                    <span>Middle Name</span>
                    <span>Middle Initial</span>

                  </div>
                </td>
              </tr>
              <br />
              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={20}>
                  <label><b>Email:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 60px)", // adjust to label width
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={20}>
                  <label><b>Applicant Id No.:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 130px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={40}>
                  <label><b>Permanent Address:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(104% - 180px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={13}>
                  <label><b>Tel. / Cell No.:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 110px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={13}>
                  <label><b>Civil Status:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 100px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={14}>
                  <label><b>Gender:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 70px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={13}>
                  <label><b>Date of Birth:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 110px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={14}>
                  <label><b>Place of Birth:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 120px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={13}>
                  <label><b>Age:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 50px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={10}>
                  <label><b>Please Check (✓):</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(113% - 150px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={10}>
                  <label><b>Freshman:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 90px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={10}>
                  <label><b>Transferee:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 95px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={10}>
                  <label><b>Others:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(102% - 75px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={40}>
                  <label><b>Last School Attended:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(107% - 210px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={20}>
                  <label><b>DEGREE/PROGRAM APPLIED:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(102% - 240px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={20}>
                  <label><b>MAJOR:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(103% - 90px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>


              <tr>
                <td colSpan="40" style={{ height: "20px" }}></td>
              </tr>

              <tr>

                <td
                  colSpan={40}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    color: "white", // This is just a fallback; overridden below
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontFamily: "Times New Roman",
                      fontSize: "13px",
                      textAlign: "left",
                      display: "block",
                    }}
                  >
                    <b>{"\u00A0\u00A0"}APPLICATION PROCEDURE:</b>
                    {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}For Enrollment Officer: Please sign and put Remarks box if they done
                  </div>
                </td>

              </tr>

              <tr>
                <td colSpan={15} style={{ border: "1px solid black", textAlign: "left", padding: "8px", fontSize: "12px" }}>
                  <b> Guidance Office</b> (as per Schedule)
                  <br />
                  <b> Step 1:</b> ECAT Examination
                </td>
                <td
                  colSpan={5}
                  style={{

                    height: "50px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                </td>

                <td colSpan={16} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> <b>College Dean's Office</b>
                  <br />
                  <b>Step 2: </b>College Interview, Qualifying / Aptitude Test and College Approval

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                    height: "35px",

                  }}
                >

                </td>
              </tr>
              <tr>
                <td colSpan={15} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px" }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                    height: "50px",

                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>
                <td colSpan={5} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px" }}>

                </td>
                <td colSpan={6} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px" }}>

                </td>
                <td colSpan={5} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px" }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>

              </tr>


              <tr>
                <td colSpan="40" style={{ height: "20px" }}></td>
              </tr>


              <tr>
                <td colSpan={10} style={{ border: "1px solid black", textAlign: "left", padding: "8px", fontSize: "12px", }}>
                  <b> Medical and Dental Service Office</b><br />   <b>Step 3:</b> Medical Examination
                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",

                  }}
                >

                </td>

                <td colSpan={11} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> <b>Registrar's Office</b><br /><b>Step 4:</b> Submission of Original Cridentials

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",

                  }}
                >

                </td>
                <td colSpan={10} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> <b>College Dean's Office</b><br /><b>Step 5:</b>College Enrollment</td>
              </tr>

              <tr>
                <td colSpan={10} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px", }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>


                <td colSpan={11} style={{ height: "50px", fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>
                <td colSpan={10} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> </td>
              </tr>

              <tr>
                <td colSpan="40" style={{ height: "20px" }}></td>
              </tr>


              <td
                colSpan={40}
                style={{
                  height: "0.2in",
                  fontSize: "72.5%",
                  border: "transparent",
                  color: "white", // fallback
                }}
              >
                <div
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Times New Roman",
                    textAlign: "right",

                  }}
                >
                  College Dean's Copy
                </div>
              </td>

            </tbody>

          </table>

          <hr
            style={{
              width: "100%",
              maxWidth: "770px",
              border: "none",
              borderTop: "1px dashed black",
              margin: "10px auto",
            }}
          />
          <Container>
            <div style={{
              width: "8in", // matches table width assuming 8in for 40 columns
              maxWidth: "100%",
              margin: "0 auto", // center the content
              fontFamily: "Times New Roman",
              boxSizing: "border-box",

              padding: "10px 0", // reduced horizontal padding

            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                {/* Logo */}
                <div style={{ flexShrink: 0, marginRight: "20px" }}>
                  <img
                    src={EaristLogo}
                    alt="Earist Logo"
                    style={{ width: "120px", height: "120px", objectFit: "contain", marginLeft: "10px", marginTop: "-25px" }}
                  />
                </div>



                <div style={{
                  flexGrow: 1,
                  textAlign: "center",
                  fontSize: "12px",
                  fontFamily: "Arial",
                  letterSpacing: "5",
                  lineHeight: 1.4,
                  paddingTop: 0,
                  paddingBottom: 0
                }}>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", fontsize: "12px", }}>Republic of the Philippines</div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", letterSpacing: '2px' }}><b>EULOGIO "AMANG" RODRIGUEZ </b></div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", letterSpacing: '2px' }}><b>INSTITUTE OF SCIENCE AND TECHNOLOGY</b></div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", fontSize: "12px" }}>Nagtahan, Sampaloc, Manila 1008</div>
                  <div style={{ marginLeft: "-155px", fontFamily: "Arial", letterSpacing: '1px', }}><b>OFFICE OF THE ADMISSION SERVICES</b></div>

                  <br />
                  <div style={{
                    fontSize: "21px",
                    fontFamily: "Arial",
                    fontWeight: "bold",
                    marginBottom: "5px",
                    marginTop: "0",
                    marginLeft: "-145px",
                    textAlign: "center",
                  }}>
                    Admission Form (Process)
                  </div>
                </div>
              </div>
            </div>
          </Container>



          <table
            className="student-table"
            style={{
              borderCollapse: "collapse",
              fontFamily: "Arial, Helvetica, sans-serif",
              width: "8in",
              margin: "0 auto",

              textAlign: "center",
              tableLayout: "fixed",
            }}
          >

            <tbody>
              <tr>
                <tr>
                  <td colSpan="40" style={{ height: "20px" }}></td>
                </tr>

                <tr>
                  <td colSpan="40" style={{ height: "20px" }}></td>
                </tr>
                <td
                  colSpan={40}
                  style={{
                    fontFamily: "Times New Roman",
                    fontSize: "16px",
                    paddingTop: "5px",  // you can reduce this if needed
                    marginTop: 0,
                  }}
                >
                  <span style={{ fontWeight: "bold", marginRight: "10px", marginLeft: "-5px" }}>
                    Name of Student:
                  </span>{" "}
                  <span
                    style={{
                      display: "inline-block",
                      borderBottom: "1px solid black",
                      width: "82%",
                      paddingLeft: "10px",
                    }}
                  >
                    {/* Full name goes here */}
                  </span>
                </td>
              </tr>

              <tr>
                <td colSpan={40} style={{ fontFamily: "Times New Roman", fontSize: "14px", paddingTop: "2px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", width: "80%", marginLeft: "120px" }}>

                    <span>Last Name</span>
                    <span>Given Name</span>
                    <span>Middle Name</span>
                    <span>Middle Initial</span>

                  </div>
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={20}>
                  <label><b>Email:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 60px)", // adjust to label width
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={20}>
                  <label><b>Applicant Id No.:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 130px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={40}>
                  <label><b>Permanent Address:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(104% - 180px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={13}>
                  <label><b>Tel. / Cell No.:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 110px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={13}>
                  <label><b>Civil Status:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 100px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={14}>
                  <label><b>Gender:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 70px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={13}>
                  <label><b>Date of Birth:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 110px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={14}>
                  <label><b>Place of Birth:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 120px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={13}>
                  <label><b>Age:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 50px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={10}>
                  <label><b>Please Check (✓):</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(113% - 150px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={10}>
                  <label><b>Freshman:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 90px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={10}>
                  <label><b>Transferee:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(100% - 95px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={10}>
                  <label><b>Others:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(102% - 75px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={40}>
                  <label><b>Last School Attended:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(107% - 210px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr style={{ fontFamily: "Times New Roman", fontSize: "15px" }}>
                <td colSpan={20}>
                  <label><b>DEGREE/PROGRAM APPLIED:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(102% - 240px)",
                    marginLeft: "10px"
                  }} />
                </td>
                <td colSpan={20}>
                  <label><b>MAJOR:</b></label>
                  <span style={{
                    display: "inline-block",
                    borderBottom: "1px solid black",
                    width: "calc(103% - 90px)",
                    marginLeft: "10px"
                  }} />
                </td>
              </tr>

              <tr>
                <td colSpan="40" style={{ height: "20px" }}></td>
              </tr>

              <tr>

                <td
                  colSpan={40}
                  style={{
                    height: "0.2in",
                    fontSize: "72.5%",
                    color: "white", // This is just a fallback; overridden below
                  }}
                >
                  <div
                    style={{
                      color: "black",
                      fontFamily: "Times New Roman",
                      fontSize: "13px",
                      textAlign: "left",
                      display: "block",
                    }}
                  >
                    <b>{"\u00A0\u00A0"}APPLICATION PROCEDURE:</b>
                    {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}For Enrollment Officer: Please sign and put Remarks box if they done
                  </div>
                </td>

              </tr>

              <tr>
                <td colSpan={15} style={{ border: "1px solid black", textAlign: "left", padding: "8px", fontSize: "12px" }}>
                  <b> Guidance Office</b> (as per Schedule)
                  <br />
                  <b> Step 1:</b> ECAT Examination
                </td>
                <td
                  colSpan={5}
                  style={{

                    height: "50px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                </td>

                <td colSpan={16} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> <b>College Dean's Office</b>
                  <br />
                  <b>Step 2: </b>College Interview, Qualifying / Aptitude Test and College Approval

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                    height: "35px",

                  }}
                >

                </td>
              </tr>
              <tr>
                <td colSpan={15} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px" }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                    height: "50px",

                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>
                <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}>

                </td>
                <td colSpan={6} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}>

                </td>
                <td colSpan={5} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>

              </tr>


              <tr>
                <td colSpan="40" style={{ height: "20px" }}></td>
              </tr>


              <tr>
                <td colSpan={10} style={{ border: "1px solid black", textAlign: "left", padding: "8px", fontSize: "12px", }}>
                  <b> Medical and Dental Service Office</b><br />   <b>Step 3:</b> Medical Examination
                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",

                  }}
                >

                </td>

                <td colSpan={11} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> <b>Registrar's Office</b><br /><b>Step 4:</b> Submission of Original Cridentials

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",

                  }}
                >

                </td>
                <td colSpan={10} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> <b>College Dean's Office</b><br /><b>Step 5:</b>College Enrollment</td>
              </tr>

              <tr>
                <td colSpan={10} style={{ border: "1px solid black", textAlign: "center", padding: "8px", fontSize: "12px", }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>


                <td colSpan={11} style={{ height: "50px", fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}>

                </td>
                <td
                  colSpan={5}
                  style={{

                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >

                  <ForwardIcon
                    sx={{
                      marginTop: "-53px",
                      fontSize: 70, // normal screen size
                      '@media print': {
                        fontSize: 14, // smaller print size
                        margin: 0,
                      }
                    }}
                  />

                </td>
                <td colSpan={10} style={{ fontSize: "12px", fontFamily: "Arial", border: "1px solid black", padding: "8px", textAlign: "left" }}> </td>
              </tr>

              <tr>
                <td colSpan="40" style={{ height: "20px" }}></td>
              </tr>


              <td
                colSpan={40}
                style={{
                  height: "0.2in",
                  fontSize: "72.5%",
                  border: "transparent",
                  color: "white", // fallback
                }}
              >
                <div
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "black",
                    fontFamily: "Times New Roman",
                    textAlign: "right",

                  }}
                >
                  Registrar's Copy
                </div>
              </td>

            </tbody>

          </table>

        </div>
      </Container>

    </Box>
  );
};

export default AdmissionFormProcess;
