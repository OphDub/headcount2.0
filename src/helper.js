class DistrictRepository {
    constructor(originalData) {

        this.data = this.cleanData(originalData);
    }

    cleanData(originalData) {
        const dataObj = originalData.reduce( (accu, dataPoint) => {
            const upCaseLocation = dataPoint.Location.toUpperCase();
            const yearTimeFrame = dataPoint.TimeFrame;
            if(!accu[ upCaseLocation ]) {
                accu[ upCaseLocation ] = {
                    data: {},
                    location: upCaseLocation
                }
            }

            accu[ upCaseLocation ].data[ yearTimeFrame ] = dataPoint.Data;

            return accu            
        }, {})
        return dataObj;
    }

    findByName(name) {
        if(name === undefined) {
            return undefined
        } else {
            const upCaseName = name.toUpperCase();            
            return this.data[ upCaseName ] ? this.data[ upCaseName ] : undefined 
        }
    }
}

export default DistrictRepository;