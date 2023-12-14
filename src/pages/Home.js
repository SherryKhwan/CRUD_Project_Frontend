import React, { useState } from 'react'
import { createRecord } from '../api/record';

const Home = () => {

    const [developer, setDeveloper] = useState("");
    const [project, setProject] = useState("");
    const [unit, setUnit] = useState("");
    const [unittype, setUnitType] = useState("");
    const [level, setLevel] = useState("");
    const [location, setLocation] = useState("");
    const [exposure, setExposure] = useState("");
    const [size, setSize] = useState("");
    const [bedCount, setBedCount] = useState(0);
    const [bathCount, setBathCount] = useState(0);
    const [needParking, setNeedParking] = useState(false);
    const [needLocker, setNeedLocker] = useState(false);
    const [needBalcony, setNeedBalcony] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isValid = () => {
        return true;
    }

    const objectMaker = () => {
        return {
            developerName: developer,
            projectName: project,
            unit: unit,
            unitType: unittype,
            level: level,
            location: location,
            exposure: exposure,
            size: size,
            bedCount: bedCount,
            bathCount: bathCount,
            needParking: needParking,
            needLocker: needLocker,
            needBalcony: needBalcony
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        try {
            if (isValid()) {
                const data = objectMaker();
                await createRecord((data))
            }
        } catch (error) {

        } finally {
            setTimeout(() => {
                setIsSubmitted(false)
            }, 1000);
        }
    }

    return (
        <div className='container pb-3'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h2 className='text-center mb-4 font-color'>Form</h2>
                    <form className='font-color'>
                        <div className="row mb-3">
                            <label htmlFor="developer" className="col-sm-3 col-form-label">Developer</label>
                            <div className="col-sm-9">
                                <input type="text" value={developer} onChange={e => setDeveloper(e.target.value)} className={(isSubmitted && developer.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Developer Name *' required id="developer" />
                                <div className="invalid-feedback">
                                    Please choose the developer name.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="project" className="col-sm-3 col-form-label">Project</label>
                            <div className="col-sm-9">
                                <input type="text" value={project} onChange={e => setProject(e.target.value)} className={(isSubmitted && project.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Project Name *' required id="project" />
                                <div className="invalid-feedback">
                                    Please choose the project name.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="unit" className="col-sm-3 col-form-label">Unit</label>
                            <div className="col-sm-9">
                                <input type="text" value={unit} onChange={e => setUnit(e.target.value)} className={(isSubmitted && unit.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Unit Name *' required id="unit" />
                                <div className="invalid-feedback">
                                    Please choose the unit name.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="unittype" className="col-sm-3 col-form-label">Unit Type</label>
                            <div className="col-sm-9">
                                <input type="text" value={unittype} onChange={e => setUnitType(e.target.value)} className={(isSubmitted && unittype.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Unit Type *' required id="unittype" />
                                <div className="invalid-feedback">
                                    Please choose the unit type.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="level" className="col-sm-3 col-form-label">Level</label>
                            <div className="col-sm-9">
                                <input type="text" value={level} onChange={e => setLevel(e.target.value)} className={(isSubmitted && level.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Level *' required id="level" />
                                <div className="invalid-feedback">
                                    Please choose the level.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="location" className="col-sm-3 col-form-label">Location</label>
                            <div className="col-sm-9">
                                <input type="text" value={location} onChange={e => setLocation(e.target.value)} className={(isSubmitted && location.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Location *' required id="location" />
                                <div className="invalid-feedback">
                                    Please choose the location.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="exposure" className="col-sm-3 col-form-label">Exposure</label>
                            <div className="col-sm-9">
                                <input type="text" value={exposure} onChange={e => setExposure(e.target.value)} className={(isSubmitted && exposure.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Exposure *' required id="exposure" />
                                <div className="invalid-feedback">
                                    Please choose the exposure.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="size" className="col-sm-3 col-form-label">Size</label>
                            <div className="col-sm-9">
                                <input type="text" value={size} onChange={e => setSize(e.target.value)} className={(isSubmitted && size.trim() === "" ? "is-invalid form-control" : "form-control")} placeholder='Enter Size (Sq Ft) *' required id="size" />
                                <div className="invalid-feedback">
                                    Please choose the size.
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="size" className="col-sm-3 col-form-label">BedRoom</label>
                            <div className="col-sm-9 justify-content-between d-flex">
                                <div className='col-4'>
                                    <input type="button" value=" - " onClick={() => setBedCount(parseInt(bedCount) - 1)} className={"btn btn-small py-1 px-2 btn-danger"} />
                                    <input type="text" style={{ width: '40px' }} onChange={e => setBedCount(e.target.value)} value={bedCount} className={"text-center py-1 border"} />
                                    <input type="button" value=" + " onClick={() => setBedCount(parseInt(bedCount) + 1)} className={"btn btn-small py-1 px-2 btn-success"} />
                                </div>
                                <div className='col-7 d-flex'>
                                    <label htmlFor="size" className="col-sm-6 col-form-label">BathRoom</label>
                                    <div className="col-sm-9">
                                        <input type="button" value=" - " onClick={() => setBathCount(parseInt(bathCount) - 1)} className={"btn btn-small py-1 px-2 btn-danger"} />
                                        <input type="text" style={{ width: '40px' }} onChange={e => setBathCount(e.target.value)} value={bathCount} className={"text-center py-1 border"} />
                                        <input type="button" value=" + " onClick={() => setBathCount(parseInt(bathCount) + 1)} className={"btn btn-small py-1 px-2 btn-success"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="parking" className="col-sm-3 col-check-label">Parking</label>
                            <div className="col-sm-9 justify-content-between d-flex">
                                <div className='col-2'>
                                    <input id='parking' style={{ height: "20px", width: "20px" }} type="checkbox" value={needParking} onChange={() => setNeedParking(!needParking)} className={"form-check-input"} />
                                </div>
                                <div className='col-5 d-flex justify-content-end align-items-center'>
                                    <label htmlFor="locker" className="col-sm-5 pt-0 col-form-label">Locker</label>
                                    <div className="col-sm-4">
                                        <input id='locker' style={{ height: "20px", width: "20px" }} type="checkbox" value={needLocker} onChange={() => setNeedLocker(!needLocker)} className={"form-check-input mt-0"} />
                                    </div>
                                </div>
                                <div className='col-5 d-flex justify-content-end align-items-center'>
                                    <label htmlFor="balcony" className="col-sm-6 pt-0 col-form-label">Balcony</label>
                                    <div className="col-sm-2">
                                        <input id='balcony' style={{ height: "20px", width: "20px" }} type="checkbox" value={needBalcony} onChange={() => setNeedBalcony(!needBalcony)} className={"form-check-input mt-0"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <div className='d-grid w-25 gap-2'>
                                <button disabled={isSubmitted} onClick={handleSubmit} className='btn btn-block btn-outline-light'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home