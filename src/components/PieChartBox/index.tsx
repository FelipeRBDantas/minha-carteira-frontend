import React from "react";

// COMPONENTS

import { v4 as uuidv4 } from 'uuid';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

// STYLES

import { 
  Container, 
  SideLeft, 
  LegendContainer, 
  Legend, 
  SideRight 
} from "./styles";

interface IPieChartProps {
  data: {
    name: string;
    color: string;
    value: number;
    percent: number;
  }[];
}

const PieChartBox: React.FC<IPieChartProps> = ({
  data
}) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      
      <LegendContainer>
        {
          data && data.map((indicator) => (
            <Legend color={ indicator.color } key={ uuidv4() }>
              <div>{ indicator.percent || '--' }</div>
              <span>{ indicator.name }</span>
            </Legend>
          ))
        }
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer height="100%" width="100%">
        <PieChart>
          <Pie 
            data={ data }
            dataKey="percent"
          >
            {
              data && data.map((indicator) => (
                <Cell key={ indicator.name } fill={ indicator.color } />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
