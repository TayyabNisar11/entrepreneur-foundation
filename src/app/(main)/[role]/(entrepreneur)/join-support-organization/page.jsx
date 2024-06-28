"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";
import PageHeader from "@/components/PageHeader";

const JoinSupportOrganization = () => {
  const [applications, setApplications] = useState([
    {
      organization: "Organization 1",
      serviceCategories: "Category 1",
      url: "http://example.com",
      status: "Apply",
    },
    {
      organization: "Organization 2",
      serviceCategories: "Category 2",
      url: "http://example.com",
      status: "Apply",
    },
  ]);

  const [specificServices, setSpecificServices] = useState([
    {
      service: "Incubators",
      organization: "Organization 1",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Incubators",
      organization: "Organization 2",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Incubators",
      organization: "Organization 3",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Maker Space",
      organization: "Organization 1",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Maker Space",
      organization: "Organization 2",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Maker Space",
      organization: "Organization 3",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Co-Working Space",
      organization: "Organization 1",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Co-Working Space",
      organization: "Organization 2",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Co-Working Space",
      organization: "Organization 3",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Business Accelerator",
      organization: "Organization 1",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Business Accelerator",
      organization: "Organization 2",
      url: "http://example.com",
      status: "Apply",
    },
    {
      service: "Business Accelerator",
      organization: "Organization 3",
      url: "http://example.com",
      status: "Apply",
    },
  ]);

  const handleApply = (index) => {
    const updatedApplications = [...applications];
    if (updatedApplications[index].status === "Apply") {
      updatedApplications[index].status = "Applied";
    } else if (updatedApplications[index].status === "Applied") {
      updatedApplications[index].status = "Joined";
    }
    setApplications(updatedApplications);
  };

  const handleSpecificApply = (index) => {
    const updatedServices = [...specificServices];
    if (updatedServices[index].status === "Apply") {
      updatedServices[index].status = "Applied";
    } else if (updatedServices[index].status === "Applied") {
      updatedServices[index].status = "Joined";
    }
    setSpecificServices(updatedServices);
  };

  const handleCancel = (index, type) => {
    if (type === "application") {
      const updatedApplications = [...applications];
      updatedApplications[index].status = "Apply";
      setApplications(updatedApplications);
    } else if (type === "specificService") {
      const updatedServices = [...specificServices];
      updatedServices[index].status = "Apply";
      setSpecificServices(updatedServices);
    }
  };

  const renderSpecificServices = () => {
    const serviceRows = [];
    const serviceMap = {};

    specificServices.forEach((service, index) => {
      if (!serviceMap[service.service]) {
        serviceMap[service.service] = [];
      }
      serviceMap[service.service].push({ ...service, index });
    });

    Object.keys(serviceMap).forEach((service) => {
      const services = serviceMap[service];
      services.forEach((serviceObj, i) => {
        serviceRows.push(
          <TableRow key={serviceObj.index}>
            <TableCell>{i === 0 ? serviceObj.service : ""}</TableCell>
            <TableCell>{serviceObj.organization}</TableCell>
            <TableCell>
              <a
                href={serviceObj.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {serviceObj.url}
              </a>
            </TableCell>
            <TableCell>
              <Button
                variant="contained"
                color={serviceObj.status === "Apply" ? "primary" : "secondary"}
                onClick={() => handleSpecificApply(serviceObj.index)}
              >
                {serviceObj.status}
              </Button>
            </TableCell>
            <TableCell>
              <Button
                variant="outlined"
                
                onClick={() =>
                  handleCancel(serviceObj.index, "specificService")
                }
              >
                Cancel
              </Button>
            </TableCell>
          </TableRow>
        );
      });
    });

    return serviceRows;
  };

  return (
    <PageHeader title="Join Support Organization">
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1" gutterBottom>
          By registering, you are automatically a member of the Entrepreneurs
          Society and will receive notices of programs and events. When you
          “Apply” to a specific organization, it will show “Applied”; when
          approved, it will change to “Joined”.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Search Organizations Alphabetically
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow
                style={{ backgroundColor: "#424242", color: "#FFFFFF" }}
              >
                {[
                  "Organizations",
                  "Service Categories",
                  "URL",
                  "Application",
                ].map((label) => (
                  <TableCell key={label} style={{ color: "#FFFFFF" }}>
                    {label}
                  </TableCell>
                ))}
                <TableCell style={{ color: "#FFFFFF" }}></TableCell>
              </TableRow>
              {applications.map((application, index) => (
                <TableRow key={index}>
                  <TableCell>{application.organization}</TableCell>
                  <TableCell>{application.serviceCategories}</TableCell>
                  <TableCell>
                    <a
                      href={application.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {application.url}
                    </a>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={
                        application.status === "Apply" ? "primary" : "secondary"
                      }
                      onClick={() => handleApply(index)}
                    >
                      {application.status}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      
                      onClick={() => handleCancel(index, "application")}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Search for Specific Service
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableBody>
              <TableRow
                style={{ backgroundColor: "#424242", color: "#FFFFFF" }}
              >
                {[
                  "Organizations",
                  "Service Categories",
                  "URL",
                  "Application",
                ].map((label) => (
                  <TableCell key={label} style={{ color: "#FFFFFF" }}>
                    {label}
                  </TableCell>
                ))}
                <TableCell style={{ color: "#FFFFFF" }}></TableCell>
              </TableRow>
              {renderSpecificServices()}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </PageHeader>
  );
};

export default JoinSupportOrganization;
