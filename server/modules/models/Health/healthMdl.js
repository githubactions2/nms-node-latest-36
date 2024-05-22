var dbutil = require( '../../../../utils/db.utils');
var sqldb = require('../../../../config/db.config');
var df = require( '../../../../utils/dflower.utils');
var cntxtDtls = df.getModuleMetaData(__dirname, __filename);


/*****************************************************************************
* Function : memorylistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.memorylistMdl = function (data) {
    var fnm = "memorylistMdl"
    var memory =``
    if(data.device_id){
        memory=`where d.device_id=${data.device_id} `
    }
    var QRY_TO_EXEC = ` select d.hostname,d.device_id,(d.sys_total_memory) ,(d.sys_used_memory ),d.sys_mem_type from sensors as s
    join device_info as d on d.device_id=s.device_id
     ${memory}  `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : fanspeedlistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.fanspeedlistMdl = function (data) {
    var fnm = "fanspeedlistMdl"
    var fanspeed =``
    if(data.device_id){
        fanspeed=` and di.id=${data.device_id} `
    }
    var QRY_TO_EXEC = `select   s.id, di.hostname,s.system_fanspeed value, 'Fanspeed' descrip
    from sensors_info as s 
    join System_description as di on s.id=di.id
    where s.system_fanspeed not in ('0','N/A') ${fanspeed} `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : currentlistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.currentlistMdl = function (data) {
    var fnm = "currentlistMdl"
    var current =``
    if(data.device_id){
        current=` and di.id=${data.device_id} `
    }
    var QRY_TO_EXEC = `select   s.id, di.hostname,s.system_current value, 'Current' descrip
    from sensors_info as s 
    join System_description as di on s.id=di.id
    where s.system_current not in ('0','N/A')${current} `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : voltagelistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.voltagelistMdl = function (data) {
    var fnm = "voltagelistMdl"
    var voltage =``
    if(data.device_id){
        voltage=` and di.device_id=${data.device_id} `
    }
    var QRY_TO_EXEC = `select   s.device_id, di.hostname,s.sys_voltage value, 'voltage' descrip
    from sensors as s 
    join device_info as di on s.device_id=di.device_id
    where s.sys_voltage not in (0,'N/A') ${voltage}`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : powerlistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.powerlistMdl = function (data) {
    var fnm = "powerlistMdl"
    var power=``
    if(data.device_id){
        power=` and di.device_id=${data.device_id} `
    }
    var QRY_TO_EXEC = `select   s.device_id, di.hostname,s.sys_power value, 'Power' descrip
    from sensors as s 
    join device_info as di on s.device_id=di.device_id
    where s.sys_power not in (0,'N/A') ${power}`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : frequencylistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.frequencylistMdl = function (data) {
    var fnm = "frequencylistMdl"
    var frequency=``
    if(data.device_id){
        frequency=` and di.device_id=${data.device_id} `
    }
    var QRY_TO_EXEC = ` select   s.device_id, di.hostname,s.sys_processor_frequency/1000 value, 'Frequency' descrip
    from sensors as s
    left join device_info as di on s.device_id=di.device_id
     where s.sys_processor_frequency not in (0,'N/A') ${frequency}`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : statuslistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.statuslistMdl = function (data) {
    var fnm = "statuslistMdl"
    var QRY_TO_EXEC = ` SELECT 
    d.hostname,
    CASE 
      WHEN s.sys_primary_powersupplyrate = 1  THEN 'true'
      ELSE 'false'
    END AS 'Primary_powersupplyrate',
     CASE 
      WHEN s.sys_backup_powersupplyrate = 1 THEN 'true'
      ELSE 'false'
    END AS 'Backup_powersupplyrate'
  FROM sensors as s
  JOIN devices as d ON d.device_id = s.device_id;`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : TemperaturelistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.TemperaturelistMdl = function (data) {
    var fnm = "TemperaturelistMdl"

    var temperature=``
    var temperature1=``

    if(data.device_id){
        temperature=` and ds.id=${data.device_id} `
    }
    if(data.device_id){
        temperature1=` and d.id=${data.device_id} `
    }
    var QRY_TO_EXEC = ` SELECT s.id, system_temperature/10 AS temperature, 'System' AS type, ds.hostname
    FROM sensors_info AS s
    JOIN System_description AS ds ON ds.id = s.id
    WHERE system_temperature > 0 ${temperature}
    UNION ALL
    SELECT s.id, system_processor_temp/10 AS temperature, 'Processor' AS type, d.hostname
    FROM sensors_info AS s
    JOIN System_description AS d ON d.id = s.id
    WHERE system_processor_temp > 0 ${temperature1}
    ORDER BY id;  `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};