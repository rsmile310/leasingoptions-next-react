import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import style from './doofinder-search.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { VehicleTypes } from 'enums/VehicleTypes';
import { GetStaticMakes } from 'business-logic/vehicleService';
import { GetModels } from 'business-logic/vehicleService';

type Props = {
    vehiclePreference: VehicleTypes;
    dispatchvehiclePreference: any;
}

const DoofinderSearch: React.FC<Props> = ({ vehiclePreference, dispatchvehiclePreference }) => {
    const [makeList, setMakeList] = useState([]);
    const [modelList, setModelList] = useState([]);
    const [query, setQuery] = useState<string>('');
    const [manfacturer, setManufacturer] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [minBudget, setMinBudget] = useState<number>(0);
    const [maxBudget, setMaxBudget] = useState<number>(1000000);
    const handleVehicleTypeChange = (vehicleType) => dispatchvehiclePreference(vehicleType);
    const handleMinClick = (evt) => setMinBudget(parseInt(evt.currentTarget.value));
    const handleMaxClick = (evt) => {
        let maxValue = parseInt(evt.currentTarget.value);

        if(maxValue === 1000000) {
            setMinBudget(0);
        } else if(maxValue === 10000001) {
            setMinBudget(1001);
        }
        setMaxBudget(maxValue);
    } 
    const handleMakeClick = (evt) => {
        const manfacturerUrl = evt.currentTarget.value;
        setManufacturer(manfacturerUrl);
        setQuery(manfacturerUrl);

        if (manfacturerUrl !== '') {
            GetModels(vehiclePreference, manfacturerUrl).then((data) => {
                setModelList(data.data);
            });
        } else {
            setModelList([]);
            setModel('');
        }
    }
    const handleModelClick = (evt, manfacturerUrl) => {
        const modelUrl = evt.currentTarget.value;
        setModel(modelUrl);
        setQuery(manfacturerUrl + " " + modelUrl);
    }
    const handleSearchKeyup = (evt) => setQuery(evt.currentTarget?.value);

    useEffect(() => {
        setMakeList(GetStaticMakes(vehiclePreference));
        setModelList([]);
        setQuery('');
        setManufacturer('');
        setModel('');
        setMinBudget(0);
        setMaxBudget(1000000);
    }, [vehiclePreference]);

    useEffect(() => {
        updateFilteredResults(query, manfacturer, model, minBudget, maxBudget);
    }, [query]);

    useEffect(() => {
        if (query) {
            updateFilteredResults(query, manfacturer, model, minBudget, maxBudget);
        }
    }, [minBudget, maxBudget]);

    function updateFilteredResults(query, manfacturer, model, minBudget, maxBudget) {
        //@ts-ignore doofinder and dfClassicLayers are not declared
        if (dfClassicLayers?.length > 0) {

            //@ts-ignore dfClassicLayers is not declared
            var instance = dfClassicLayers[0];

            if(instance.layer) {
                // Update search parameters
                instance.layer.controller.query = query;
                
                // Update min budget parameters
                instance.layer.config.searchParams.filter.price.gte = minBudget; 
                instance.layerOptions.searchParams.filter.price.gte = minBudget;  
                instance.layer.controller.defaults.filter.price.gte = minBudget;  
                instance.layer.controller.params.filter.price.gte = minBudget;  

                // Update max budget parameters
                instance.layer.config.searchParams.filter.price.lte = maxBudget; 
                instance.layerOptions.searchParams.filter.price.lte = maxBudget;   
                instance.layer.controller.defaults.filter.price.lte = maxBudget;   
                instance.layer.controller.params.filter.price.lte = maxBudget;   
                
                // Updated categories parameters
                if (manfacturer && model) {
                    instance.layer.config.searchParams.filter.categories = [manfacturer.toUpperCase(), model.toUpperCase()]; 
                    instance.layerOptions.searchParams.filter.categories = [manfacturer.toUpperCase(), model.toUpperCase()]; 
                    instance.layer.controller.defaults.filter.categories = [manfacturer.toUpperCase(), model.toUpperCase()]; 
                    instance.layer.controller.params.filter.categories = [manfacturer.toUpperCase(), model.toUpperCase()]; 
                } else if (manfacturer) {
                    instance.layer.config.searchParams.filter.categories = [manfacturer.toUpperCase()]; 
                    instance.layerOptions.searchParams.filter.categories = [manfacturer.toUpperCase()]; 
                    instance.layer.controller.defaults.filter.categories = [manfacturer.toUpperCase()]; 
                    instance.layer.controller.params.filter.categories = [manfacturer.toUpperCase()]; 
                }
                
                // Refresh and show doofinder
                instance.layer.controller.refresh();
            }
        }    
    }

    return (
        <div className={style['doofinder-block']}>
            <ul>
                <li><button className={`btn btn-text btn-block text-center ${vehiclePreference === VehicleTypes.Car ? style['is-selected'] : ''}`} onClick={() => handleVehicleTypeChange(VehicleTypes.Car)}>Car Leasing</button></li>
                <li><button className={`btn btn-text btn-block text-center ${vehiclePreference === VehicleTypes.Commercial ? style['is-selected'] : ''}`} onClick={() => handleVehicleTypeChange(VehicleTypes.Commercial)}>Van Leasing</button></li>
            </ul>
            <div className={style['doofinder-block__options']}>
                <div className={style['doofinder-block__row']}>
                    <label htmlFor="min-budget">Min Budget</label>
                    <select id="min-budget" value={minBudget} onChange={(evt) => handleMinClick(evt)}>
                        <option value="0">Any</option>
                        <option value="151">Over £150</option>
                        <option value="201">Over £200</option>
                        <option value="251">Over £250</option>
                        <option value="301">Over £300</option>
                        <option value="351">Over £350</option>
                        <option value="401">Over £400</option>
                        <option value="451">Over £450</option>
                        <option value="501">Over £500</option>
                        <option value="601">Over £600</option>
                        <option value="701">Over £700</option>
                        <option value="801">Over £800</option>
                        <option value="901">Over £900</option>
                        <option value="1001">Over £1000</option>
                    </select>
                    <label htmlFor="max-budget">Max Budget</label>
                    <select id="max-budget" value={maxBudget} onChange={(evt) => handleMaxClick(evt)}>
                        <option value="1000000">Any</option>
                        <option value="150">Up To £150</option>
                        <option value="200">Up To £200</option>
                        <option value="250">Up To £250</option>
                        <option value="300">Up To £300</option>
                        <option value="350">Up To £350</option>
                        <option value="400">Up To £400</option>
                        <option value="450">Up To £450</option>
                        <option value="500">Up To £500</option>
                        <option value="600">Up To £600</option>
                        <option value="700">Up To £700</option>
                        <option value="800">Up To £800</option>
                        <option value="900">Up To £900</option>
                        <option value="1000">Up To £1000</option>
                        <option value="10000001">Over £1000</option>
                    </select>
                </div>
                <div className={style['doofinder-block__row']}>
                    <label htmlFor="make">Make</label>
                    <select id="make" value={manfacturer} onChange={(evt) => handleMakeClick(evt)}>
                        <option value="">Any</option>
                        {makeList.map(manufacturer => 
                            <option key={manufacturer.id} value={manufacturer.text}>{manufacturer.text}</option>
                        )}
                    </select>
                    <label htmlFor="model">Model</label>
                    <select id="model" value={model} onChange={(evt) => handleModelClick(evt, manfacturer)}>
                        <option value="">Any</option>
                        {modelList.map(model => 
                            <option key={model.id} value={model.text}>{model.text}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className={style['doofinder-block__input']}>
                <div className={style['input-wrapper']}>
                    <div className={style['input-icon']}><FontAwesomeIcon width="16" height="16" icon={faSearch} /></div>
                    <input type="search" id="doofinderSearch" value={query} placeholder={vehiclePreference === VehicleTypes.Car ? "e.g. BMW 3 Series" : "e.g. Ford Transit"} onChange={(evt) => handleSearchKeyup(evt)} />
                </div>
            </div>
        </div>     
    )
}

const mapStateToProps = (state) => ({
    vehiclePreference: state.vehiclePreference,
    isInternal: state.isInternal
});

const mapDispatchToProps = dispatch => {
    return {
        dispatchvehiclePreference: (data: VehicleTypes) => {
            dispatch({ type: "UPDATE_VEHICLE_PREFERENCE", data: data });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoofinderSearch);