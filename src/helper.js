class DistrictRepository {
    constructor(originalData) {

        this.data = this.cleanData(originalData);
    }

    cleanData(originalData) {
        const dataObj = originalData.reduce( (accu, dataPoint) => {
            const upCaseLocation = dataPoint.Location.toUpperCase();
            const yearTimeFrame = dataPoint.TimeFrame;
            if(!accu[ dataPoint.Locaton ]) {
                accu[ dataPoint.Location ] = {
                    data: {},
                    location: upCaseLocation
                }
            }

            accu[ dataPoint.Location ].data[ yearTimeFrame ] = dataPoint.Data;

            return accu            
        }, {})
        return dataObj;
    }

    findByName(name = undefined) {
        const upCaseName = name.toUpperCase();
        return this.data[ upCaseName ] ? this.data[ upCaseName ] : undefined 
    }
}

export default DistrictRepository;