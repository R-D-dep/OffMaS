import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OfficeList } from "./office/OfficeList";
import { OfficeCreate } from "./office/OfficeCreate";
import { OfficeEdit } from "./office/OfficeEdit";
import { OfficeShow } from "./office/OfficeShow";
import { WorkstationList } from "./workstation/WorkstationList";
import { WorkstationCreate } from "./workstation/WorkstationCreate";
import { WorkstationEdit } from "./workstation/WorkstationEdit";
import { WorkstationShow } from "./workstation/WorkstationShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OfficeMappingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Office"
          list={OfficeList}
          edit={OfficeEdit}
          create={OfficeCreate}
          show={OfficeShow}
        />
        <Resource
          name="Workstation"
          list={WorkstationList}
          edit={WorkstationEdit}
          create={WorkstationCreate}
          show={WorkstationShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
