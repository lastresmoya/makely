import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/fontawesome-free-solid';
import CheckInput from "Components/Forms/CheckInput";

class FiltersBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFilters: ['FilterTest'],
            filters: {
                locations: ['United Kingdom', 'United States'],
                languages: ['English', 'Spanish']
            }
        }

        this.addFilter = this.addFilter.bind(this);
    }

    addFilter(event) {
        const currentFilters = this.state.selectedFilters;
        const isChecked = event.target.checked;
        const checkedFilter = event.target.id;

        if (isChecked) {
            currentFilters.push(checkedFilter);
            this.setState({ selectedFilters: currentFilters });
        }

        else {
            this.removeFilter(checkedFilter);
        }
    }

    removeFilter(filterCategory, filter) {
        let filters,
            i;

        switch (filterCategory) {
            case 'currentFilters':
                filters = this.state.selectedFilters;
                i = filters.indexOf(filter);

                if (i != -1) {
                    filters.splice(i, 1);
                    this.setState({ selectedFilters: filters });
                }
                break;

            case 'locationFilters':
                filters = this.state.filters.locations;
                i = filters.indexOf(filter);

                if (i != -1) {
                    filters.splice(i, 1);
                    this.setState({ 'filters.locations': filters });
                }
                break;

            case 'languageFilters':
                filters = this.state.filters.languages;
                i = filters.indexOf(filter);

                if (i != -1) {
                    filters.splice(i, 1);
                    this.setState({ 'filters.languages': filters });
                }
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="d-md-none">
                    {/* FilterTop */}
                    <div className="card py-3">
                        <a className="px-3 font-weight-bold" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Filters <FaIcon icon={faAngleDown} />
                        </a>
                        <div class="collapse" id="collapseExample">
                            <div className="card-body py-2">
                                <div className="container">
                                    <div className="d-md-flex">
                                        <div className="btn-group d-block d-md-flex">
                                            {/* Location */}
                                            <div className="dropdown">
                                                <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Location  <FaIcon icon={faAngleDown} />
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="ddLocation">
                                                    <form className="py-1 px-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-control-sm" id="locationInput" placeholder="Add Location" />
                                                        </div>
                                                        <div className="px-2">
                                                            {this.state.filters.locations.map((location, i) => {
                                                                return (
                                                                    <div key={i}>
                                                                        <small className="py-2 mr-2 font-weight-bold">
                                                                            {location}
                                                                            <span className="text-muted ml-2" onClick={() => this.removeFilter('locationFilters', `${location}`)}>
                                                                                <FaIcon icon={faTimes} />
                                                                            </span>
                                                                        </small>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            {/* Services */}
                                            <div className="dropdown">
                                                <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddServices" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Services  <FaIcon icon={faAngleDown} />
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="ddServices">
                                                    <form className="py-1 px-3">
                                                        <CheckInput label="printing" onClick={this.addFilter} />
                                                        <CheckInput label="Modelling" onClick={this.addFilter} />
                                                        <CheckInput label="Consultation" onClick={this.addFilter} />
                                                    </form>
                                                </div>
                                            </div>

                                            {/* Materials */}
                                            <div className="dropdown">
                                                <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddMaterials" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Materials  <FaIcon icon={faAngleDown} />
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="ddMaterials">
                                                    <form className="py-1 px-3">
                                                        <CheckInput label="Plastic" onClick={this.addFilter} />
                                                        <CheckInput label="Metals" onClick={this.addFilter} />
                                                    </form>
                                                    <div className="dropdown-divider"></div>
                                                    <form>
                                                        <a data-toggle="collapse" href="#advanceFilters" role="button" aria-expanded="false" aria-controls="advanceFilters">
                                                            <strong className="text-secondary px-3">Advanced Filter <FaIcon icon={faAngleDown} /></strong>
                                                        </a>
                                                        <div className="collapse multi-collapse" id="advanceFilters">
                                                            <h6 className="dropdown-header">Plastic</h6>
                                                            <div className="px-3 py-1">
                                                                <div className="form-row">
                                                                    <div className="col-sm-6"><CheckInput label="PLA" onClick={this.addFilter} /></div>
                                                                    <div className="col-sm-6"><CheckInput label="Resin" onClick={this.addFilter} /></div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="col-sm-6"><CheckInput label="PETG" onClick={this.addFilter} /></div>
                                                                    <div className="col-sm-6"><CheckInput label="ASA" onClick={this.addFilter} /></div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="col-sm-6"><CheckInput label="ABS" onClick={this.addFilter} /></div>
                                                                    <div className="col-sm-6"><CheckInput label="Nylon" onClick={this.addFilter} /></div>
                                                                </div>
                                                                <div className="form-row">
                                                                    <div className="col-sm-6"><CheckInput label="TPU" onClick={this.addFilter} /></div>
                                                                    <div className="col-sm-6"><CheckInput label="PEI" onClick={this.addFilter} /></div>
                                                                </div>
                                                            </div>
                                                            <h6 className="dropdown-header">Metals</h6>
                                                            <div className="px-3 py-1">
                                                                <div className="form-row">
                                                                    <div className="col-sm-6"><CheckInput label="Steel" onClick={this.addFilter} /></div>
                                                                    <div className="col-sm-6"><CheckInput label="Aluminium" onClick={this.addFilter} /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            {/* Language */}
                                            <div className="dropdown">
                                                <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddLanguages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Language  <FaIcon icon={faAngleDown} />
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="ddLanguages">
                                                    <form className="py-1 px-3">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control form-control-sm" id="languageInput" placeholder="Add Language" />
                                                        </div>
                                                        <div className="px-2">
                                                            {this.state.filters.languages.map((language, i) => {
                                                                return (
                                                                    <div key={i}>
                                                                        <small className="py-2 mr-2 font-weight-bold">
                                                                            {language}
                                                                            <span className="text-muted ml-2" onClick={() => this.removeFilter('languageFilters', `${language}`)}>
                                                                                <FaIcon icon={faTimes} />
                                                                            </span>
                                                                        </small>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                            {/* Projects */}
                                            <div className="dropdown">
                                                <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Projects  <FaIcon icon={faAngleDown} />
                                                </a>

                                                <div className="dropdown-menu" aria-labelledby="ddProjects">
                                                    {/* <h6 className="dropdown-header">Project Completed</h6> */}
                                                    <form className="py-1 px-3">
                                                        <CheckInput label="0-5" />
                                                        <CheckInput label="6-10" />
                                                        <CheckInput label="11+" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MoreFilters */}
                    <div className="card">
                        <div className="card-body py-2">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col ml-3">
                                        {this.state.selectedFilters &&
                                            this.state.selectedFilters.map((filter, i) => {
                                                return (
                                                    <button
                                                        className="btn btn-light btn-sm mr-2 font-weight-bold"
                                                        key={i}
                                                        onClick={() => this.removeFilter('currentFilters', `${filter}`)}
                                                    >
                                                        {filter} <FaIcon icon={faTimes} />
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-auto ml-auto mr-3">
                                        <strong>A total of 234</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-none d-md-block">
                    {/* FilterTop */}
                    <div className="card">
                        <div className="card-body py-2">
                            <div className="container">
                                <div className="d-flex">
                                    <div className="btn-group">
                                        {/* Location */}
                                        <div className="dropdown">
                                            <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Location  <FaIcon icon={faAngleDown} />
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="ddLocation">
                                                <form className="py-1 px-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-sm" id="locationInput" placeholder="Add Location" />
                                                    </div>
                                                    <div className="px-2">
                                                        {this.state.filters.locations.map((location, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <small className="py-2 mr-2 font-weight-bold">
                                                                        {location}
                                                                        <span className="text-muted ml-2" onClick={() => this.removeFilter('locationFilters', `${location}`)}>
                                                                            <FaIcon icon={faTimes} />
                                                                        </span>
                                                                    </small>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        {/* Services */}
                                        <div className="dropdown">
                                            <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddServices" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Services  <FaIcon icon={faAngleDown} />
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="ddServices">
                                                <form className="py-1 px-3">
                                                    <CheckInput label="printing" onClick={this.addFilter} />
                                                    <CheckInput label="Modelling" onClick={this.addFilter} />
                                                    <CheckInput label="Consultation" onClick={this.addFilter} />
                                                </form>
                                            </div>
                                        </div>

                                        {/* Materials */}
                                        <div className="dropdown">
                                            <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddMaterials" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Materials  <FaIcon icon={faAngleDown} />
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="ddMaterials">
                                                <form className="py-1 px-3">
                                                    <CheckInput label="Plastic" onClick={this.addFilter} />
                                                    <CheckInput label="Metals" onClick={this.addFilter} />
                                                </form>
                                                <div className="dropdown-divider"></div>
                                                <form>
                                                    <a data-toggle="collapse" href="#advanceFilters" role="button" aria-expanded="false" aria-controls="advanceFilters">
                                                        <strong className="text-secondary px-3">Advanced Filter <FaIcon icon={faAngleDown} /></strong>
                                                    </a>
                                                    <div className="collapse multi-collapse" id="advanceFilters">
                                                        <h6 className="dropdown-header">Plastic</h6>
                                                        <div className="px-3 py-1">
                                                            <div className="form-row">
                                                                <div className="col-sm-6"><CheckInput label="PLA" onClick={this.addFilter} /></div>
                                                                <div className="col-sm-6"><CheckInput label="Resin" onClick={this.addFilter} /></div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-sm-6"><CheckInput label="PETG" onClick={this.addFilter} /></div>
                                                                <div className="col-sm-6"><CheckInput label="ASA" onClick={this.addFilter} /></div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-sm-6"><CheckInput label="ABS" onClick={this.addFilter} /></div>
                                                                <div className="col-sm-6"><CheckInput label="Nylon" onClick={this.addFilter} /></div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="col-sm-6"><CheckInput label="TPU" onClick={this.addFilter} /></div>
                                                                <div className="col-sm-6"><CheckInput label="PEI" onClick={this.addFilter} /></div>
                                                            </div>
                                                        </div>
                                                        <h6 className="dropdown-header">Metals</h6>
                                                        <div className="px-3 py-1">
                                                            <div className="form-row">
                                                                <div className="col-sm-6"><CheckInput label="Steel" onClick={this.addFilter} /></div>
                                                                <div className="col-sm-6"><CheckInput label="Aluminium" onClick={this.addFilter} /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* Language */}
                                        <div className="dropdown">
                                            <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddLanguages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Language  <FaIcon icon={faAngleDown} />
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="ddLanguages">
                                                <form className="py-1 px-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-sm" id="languageInput" placeholder="Add Language" />
                                                    </div>
                                                    <div className="px-2">
                                                        {this.state.filters.languages.map((language, i) => {
                                                            return (
                                                                <div key={i}>
                                                                    <small className="py-2 mr-2 font-weight-bold">
                                                                        {language}
                                                                        <span className="text-muted ml-2" onClick={() => this.removeFilter('languageFilters', `${language}`)}>
                                                                            <FaIcon icon={faTimes} />
                                                                        </span>
                                                                    </small>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                        {/* Projects */}
                                        <div className="dropdown">
                                            <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Projects  <FaIcon icon={faAngleDown} />
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="ddProjects">
                                                {/* <h6 className="dropdown-header">Project Completed</h6> */}
                                                <form className="py-1 px-3">
                                                    <CheckInput label="0-5" />
                                                    <CheckInput label="6-10" />
                                                    <CheckInput label="11+" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* MoreFilters */}
                    <div className="card">
                        <div className="card-body py-2">
                            <div className="container">
                                <div className="row d-flex align-items-center">
                                    <div className="col ml-3">
                                        {this.state.selectedFilters &&
                                            this.state.selectedFilters.map((filter, i) => {
                                                return (
                                                    <button
                                                        className="btn btn-light btn-sm mr-2 font-weight-bold"
                                                        key={i}
                                                        onClick={() => this.removeFilter('currentFilters', `${filter}`)}
                                                    >
                                                        {filter} <FaIcon icon={faTimes} />
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="col-auto ml-auto mr-3">
                                        <strong>A total of 234</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FiltersBar;
