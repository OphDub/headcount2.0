class DistrictRepository {
  constructor(originalData) {
    this.data = this.cleanData(originalData);
  }

  cleanData(originalData) {
    const dataObj = originalData.reduce( (accu, dataPoint) => {
      const upCaseLocation = dataPoint.Location.toUpperCase();
      const yearTimeFrame = dataPoint.TimeFrame;
      if (!accu[upCaseLocation]) {
        accu[upCaseLocation] = {
          location: upCaseLocation,
          data: {}
        };
      }

      const cleanNum = dataPoint.Data === "N/A" || dataPoint.Data === "#DIV/0!" ? dataPoint.Data = 0 : dataPoint.Data;

      const roundedNum = cleanNum > 0 && cleanNum < 1 ? ( Math.round( cleanNum * 1000 ) ) / 1000 : cleanNum;

      accu[upCaseLocation].data[yearTimeFrame] = roundedNum;

      return accu;
    }, {});
    return dataObj;
  }

  findByName(name) {
    if (name === undefined) {
      return undefined;
    } else {
      const upCaseName = name.toUpperCase();
      return this.data[upCaseName] ? this.data[upCaseName] : undefined;
    }
  }

  findAllMatches(name) {
    if (!name) {
      const districts = Object.keys(this.data);

      // return districts.map((schoolName) => this.data[schoolName])

      return districts.reduce((acc, district) => {
        acc.push(this.data[district]);
        return acc;
      }, []);

    } else {
      const upcaseName = name.toUpperCase();
      const districts = Object.keys(this.data);

      return districts.filter(dataPoint => {
        if (this.data[dataPoint].location.includes(upcaseName)) {
          return this.data[dataPoint];
        }
      }).map((schoolName) => {
        return this.data[schoolName];
      });
    }
  }

  findAverage(name) {
    const upCaseName = name.toUpperCase();
    const aveKeys = Object.keys(this.data[upCaseName].data);
    const averageOfCardData = aveKeys.reduce( (accu, val) => {
      accu += this.data[upCaseName].data[val];
      return accu;
    }, 0 ) / aveKeys.length;

    const roundedAve = Math.round(averageOfCardData * 1000) / 1000;
    return roundedAve;
  }

  compareDistrictAverages(skool1, skool2) {
    const resultObj = {};
    const upCaseSkool1 = skool1.toUpperCase();
    const upCaseSkool2 = skool2.toUpperCase();

    const average = this.findAverage(upCaseSkool1) < this.findAverage(upCaseSkool2) ?
                    this.findAverage(upCaseSkool1) / this.findAverage(upCaseSkool2) :
                    this.findAverage(upCaseSkool2) / this.findAverage(upCaseSkool1);
    const roundedAve = Math.round(average * 1000) / 1000;

    resultObj[upCaseSkool1] = this.findAverage(upCaseSkool1);
    resultObj[upCaseSkool2] = this.findAverage(upCaseSkool2);
    resultObj.compared = roundedAve;
    return resultObj;
  }
}

export default DistrictRepository;