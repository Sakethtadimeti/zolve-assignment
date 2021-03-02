import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import "./dashboard.scss";
import LanguageFilter from "./components/language-filter-component";
import { fetchJSON } from "../../common/utils/http-utils";

const LANGUAGES_URL =
  "https://api.stackexchange.com/2.2/tags?order=desc&sort=popular&site=stackoverflow";

const Dashboard = () => {
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState("");
  const fetchLanguages = async (payload = {}) => {
    try {
      const { items = [] } = await fetchJSON(LANGUAGES_URL, payload);
      if (items && items.length) {
        const languageData = items.map((item) => ({
          name: item.name,
          count: item.count,
        }));
        setLanguages(languageData);
        setError("");
      } else {
        setError("No Results found. Please refine your filter");
      }
    } catch (e) {
      setError("An error occured while fetching data");
    }
  };
  const handleSubmitClick = (filters) => {
    const { fromDate, toDate, pageSize = 1, pageNumber = 10 } = filters;
    let payload = {
      page: parseInt(pageNumber),
      pagesize: parseInt(pageSize),
    };
    if (fromDate.trim() !== "") {
      payload.fromdate = new Date(fromDate).getTime() / 1000;
    }
    if (toDate.trim() !== "") {
      payload.todate = new Date(toDate).getTime() / 1000;
    }
    fetchLanguages(payload);
  };
  useEffect(() => {
    fetchLanguages({ page: 1, pagesize: 10 });
  }, []);
  return (
    <div className="dashboard-component">
      <h1 className="page-title">Language stats</h1>
      <p>
        Find all the statistics about top tags on stack exchange. Tags are laid
        out on the X-Axis and Count of each tag is shown on the Y-Axis.
      </p>
      <p className="filter-link">Filter Results</p>
      <LanguageFilter handleSubmitClick={handleSubmitClick} />
      <div className="language-graph-container">
        {!error && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={languages}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name">
                <Label
                  value={"Tags"}
                  position="insideBottomLeft"
                  offset={-10}
                />
              </XAxis>
              <YAxis
                label={{
                  value: "Count",
                  angle: -90,
                  offset: -10,
                  position: "insideLeft",
                  textAnchor: "middle",
                }}
              />

              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        )}
        {error && (
          <div className="no-results-container">
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
