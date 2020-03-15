import React, { Component } from 'react';

import {
  find as _find,
  map as _map,
  filter as _filter,
  get as _get
} from "lodash";
// core components
import NavBar from './components/navBar';
import ServiceList from './components/serviceList';
import Providers from './components/providers';
// services
import { getServices, getProviderServices } from "./services/appService";

class App extends Component {
  state = {
    services: null,
    currentService: "All Services",//default service selection
    providers: null
  }
  componentDidMount() {
    this.getAppServices();
    this.getAppProviders()
  }
  getAppServices = async () => {
    try {
      const { data } = await getServices();
      const services = [{ id: 'All Services' }, ..._get(data, ['data'])]
      this.setState({ services });
    } catch (error) {
      console.log("appService error logs", error);
    }
  }
  getAppProviders = async () => {
    try {
      const { data } = await getProviderServices();
      const { data: allProviders, included } = data;

      const providers = _map(allProviders, p => {
        const locations = _find(included, _get(p, ['relationships', 'locations', 'data'])[0]);
        const schedules = _find(included, _get(p, ['relationships', 'schedules', 'data'])[0]);
        return {
          ...p,
          relationships: {
            locations,
            schedules
          }
        }
      });

      this.setState({ providers });
    } catch (error) {
      console.log("appProvider error logs", error);
    }
  }
  handleService = (currentService) => {
    this.setState({ currentService })
  }
  getFilteredProvider = () => {
    const { providers, currentService } = this.state;
    if (currentService === 'All Services') return providers;

    return _filter(providers, (p) => _get(p, ['relationships', 'schedules', 'attributes', 'service']) === currentService);
  }
  render() {
    const { services, currentService } = this.state;
    const filtered = this.getFilteredProvider()

    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid row  pt-4 ">
          <div className="col-md-2">
            <ServiceList
              data={services}
              currentService={currentService}
              onServiceSelect={this.handleService} />
          </div>
          <div className="col">
            <Providers data={filtered} />
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
