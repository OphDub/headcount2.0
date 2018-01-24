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
                    location: upCaseLocation,
                    data: {}
                }
            }
            const cleanNum = dataPoint.Data === "N/A" || dataPoint.Data === "#DIV/0!" ? dataPoint.Data = 0 : dataPoint.Data;

            const roundedNum = cleanNum > 0 && cleanNum < 1 ? ( Math.round( cleanNum * 1000 ) ) / 1000 : cleanNum;
            
            accu[ upCaseLocation ].data[ yearTimeFrame ] = roundedNum;

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

    findAllMatches(name) {
      if(!name) {
        const districts = Object.keys(this.data);

        return districts.reduce((acc, district) => {
          acc.push(this.data[district])
          return acc
        }, [])

      } else {
        const upcaseName = name.toUpperCase();
        const districts = Object.keys(this.data);

        return districts.filter(dataPoint => this.data[dataPoint].location.includes(upcaseName))
      }
    }
}

export default DistrictRepository;