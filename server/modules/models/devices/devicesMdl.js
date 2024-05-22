var dbutil = require( '../../../../utils/db.utils');
var sqldb = require('../../../../config/db.config');
var df = require( '../../../../utils/dflower.utils');
var cntxtDtls = df.getModuleMetaData(__dirname, __filename);


/*****************************************************************************
* Function : dropdownlistMdl
* Description : this model shows dropdown of a search filter
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.dropdownlistMdl = function (data) {
    var fnm = "dropdownlistMdl"
    var QRY_TO_EXEC = `SELECT hardware,version,os,location,type as 'device_type' FROM System_description;`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
// /*****************************************************************************
// * Function : deviceslistMdl
// * Description : this will shoows the devices list
// * Arguments : callback function
// * 04-11-2023 - RajKumar
// *
// ******************************************************************************/
// exports.deviceslistMdl = function (data) {
//     var fnm = "deviceslistMdl"
//     var QRY_TO_EXEC = `select d.hostname,di.system_description,di.system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_uptime,d.device_id from devices as d 
//     join System_description as di on di.device_id=d.device_id group by d.device_id;`;
//     console.log(QRY_TO_EXEC);
//     return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
// };
/*****************************************************************************
* Function : devicesindetailedMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesindetailedMdl = function (data) {
    var fnm = "devicesindetailedMdl"	
	console.log(data)
    var QRY_TO_EXEC = `SELECT d.id,d.community_str,d.udp_port,d.hostname as 'catched_ip',di.system_name as 'system_name',di.system_description as 'operating_system',di.system_uptime,di.system_serialnumber
    ,di.system_version as 'version'
         FROM devices as d
       join System_description as di on di.id=d.id where d.id=${data.device_id}   `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
* Function : devicessensors_infolstMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicessensors_infolstMdl = function (data) {
    var fnm = "devicessensors_infolstMdl"
    var QRY_TO_EXEC = ` 

    SELECT 
        d.community_str,
        d.udp_port,
        ROUND(s.system_voltage / 10, 3) AS voltage,
        d.hostname AS 'device',
        s.system_activefan,
        ROUND(s.system_temperature / 10) AS system_tempereature,
        s.system_fanspeed,
        ROUND(s.system_processor_temp / 10) AS Processor_temperature,
        ROUND(s.system_power / 10, 3) AS power,
        ROUND(s.system_current / 1000, 2) AS Current,
        ROUND(s.system_processor_frequency / 1000, 2) AS frequency,
        case when s.system_primary_powersupplyrate= 1 then 'true' else 'false' end  as system_primary_powersupplyrate,
        case when s.system_backup_powersupplyrate = 1 then 'true' else 'false' end as system_backup_powersupplyrate
    FROM
        sensors_info AS s
    JOIN
        devices AS d ON d.id = s.id
    WHERE
        d.id =${data.device_id}  `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : devicebasiclstMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicebasiclstMdl = function (data) {
    var fnm = "devicebasiclstMdl"
    var QRY_TO_EXEC = ` select di.ip_status,d.hostname,di.system_description,di.system_uptime,d.id from devices as d 
    join System_description as di on di.id=d.id 
    where d.ignores=0 and disabled=0 group by d.id;  `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : processorindetailMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.processorindetailMdl = function (data) {
    var fnm = "processorindetailMdl"
    var QRY_TO_EXEC = ` SELECT 
    (s.system_processor_frequency DIV 100) AS processor,
    ROUND(d.system_used_memory * 1024,0) AS used_Memory,
  d.system_total_memory  AS total_memory,
    ROUND(((d.system_used_memory*1024) / (d.system_total_memory * 1024) * 100),0) AS percentage,
    ROUND(ABS(d.system_used_memory / d.system_total_memory * 100 - 100), 0) AS remaining_percentage,
    d.system_memory_type,
    ROUND(d.system_used_disk  * 1024) AS used_disk,
    ROUND(d.system_total_disk  * 1024) AS total_disk,
    round((d.system_used_disk  * 1024) / (d.system_total_disk  * 1024) *100,0) as storage_percentage,
    round(system_total_disk*1024 - system_used_disk*1024) as 'Remaining_storage',
    round(d.system_total_memory * 1024 - d.system_used_memory * 1024) as 'Remaining_memory',
    round( ABS((d.system_used_disk  * 1024 )/ (d.system_total_disk  * 1024) *100-100 )) as remaining_storage_percentage
  FROM sensors_info AS s
  JOIN System_description AS d ON d.id = s.id
  WHERE d.id=${data.device_id} `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : devicebasiclstcountMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicebasiclstcountMdl = function (data) {
    var fnm = "devicebasiclstcountMdl"
    var QRY_TO_EXEC = ` select di.ip_status,d.hostname, di.system_uptime, di.system_description, d.id, di.system_name, COUNT(p.id) AS port_count
    FROM devices AS d
    left join  System_description as di on di.id = d.id
    left join interface_info AS p on p.id = d.id
    where d.ignores=0 and d.disabled=0
    group by d.hostname, di.system_uptime, di.system_description, d.id, di.system_name;  `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : sensors_infolistMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensors_infolistMdl = function (data) {
    var fnm = "sensors_infolistMdl"
    var sensor=``;
    if(data.device_id){
      sensor=`where di.id=${data.device_id}`
    }
    var QRY_TO_EXEC = ` select  s.id, di.hostname,s.system_voltage value, 'voltage' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_activefan value, 'activefan' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_temperature value, 'Temperature' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_fanspeed value, 'Fanspeed' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_processor_temp value, 'Processor_temp' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_power value, 'Power' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_current value, 'Current' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    union all
    select  s.id, di.hostname,s.system_processor_frequency value, 'Processor_Frequency' descrip
    from sensors_info as s
    join System_description as di on s.id=di.id
    ${sensor}
    `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : detailedinterface_infolistMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detailedinterface_infolistMdl = function (data) {
    var fnm = "detailedinterface_infolistMdl"
    var QRY_TO_EXEC = ` SELECT
    CASE WHEN p.operStatus = 1 THEN p.Name  END AS up,
    CASE WHEN p.operStatus = 2 THEN p.Name END AS down,
    p.if_index
    
FROM
    devices AS d
    JOIN interface_info AS p ON p.id = d.id
WHERE
    d.id  =${data.device_id} ;`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : allinterface_infolistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.allinterface_infolistMdl = function (data) {
    var fnm = "allinterface_infolistMdl"
    var mndlCndtnn=``;
    if(data.hostname && data.Name && data.operStatus && data.location_id ){
      mndlCndtnn =` where  d.hostname='${data.hostname}' and p.Name='${data.Name}' and p.operStatus=${data.operStatus}  and l.location_id=${data.location_id} `
    }
    else if(data.hostname && !data.Name && !data.operStatus && !data.location_id ){
      mndlCndtnn =` where d.hostname='${data.hostname}'  `
    }
   else  if(!data.hostname && data.Name && !data.operStatus && !data.location_id ){
      mndlCndtnn =`where  p.Name='${data.Name}'  `
    }
   else  if(!data.hostname && !data.Name && data.operStatus && !data.location_id ){
      mndlCndtnn =`where  p.operStatus=${data.operStatus}   `
    }
    else if(!data.hostname && !data.Name && !data.operStatus && data.location_id ){
      mndlCndtnn =`where  l.location_id=${data.location_id} `
    }
   else  if(data.hostname && data.Name && !data.operStatus && !data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and p.Name='${data.Name}'  `
    }
   else if(data.hostname && !data.Name && data.operStatus && !data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}'  and p.operStatus=${data.operStatus}   `
    }
    else if(data.hostname && !data.Name && !data.operStatus && data.location_id ){
      mndlCndtnn =` d.hostname='${data.hostname}'   and l.location_id=${data.location_id} `
    }
   else if(!data.hostname && data.Name && data.operStatus && !data.location_id ){
      mndlCndtnn =`where  p.Name='${data.Name}' and p.operStatus=${data.operStatus}   `
    }
    else if(!data.hostname && !data.Name && data.operStatus && data.location_id ){
      mndlCndtnn =`where p.operStatus=${data.operStatus}  and l.location_id=${data.location_id} `
    }
    else if(data.hostname && data.Name && data.operStatus && !data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and p.Name='${data.Name}' and p.operStatus=${data.operStatus}  `
    }
    else if(data.hostname && data.Name && !data.operStatus && data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and p.Name='${data.Name}'  and l.location_id=${data.location_id} `
    }
    else if(data.hostname && !data.Name && data.operStatus && data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and  p.operStatus=${data.operStatus}  and l.location_id=${data.location_id} `
    }
    else if(!data.hostname && !data.Name && data.operStatus && data.location_id ){
      mndlCndtnn =`where p.Name='${data.Name}' and p.operStatus=${data.operStatus}  and l.location_id=${data.location_id} `
    }
    var QRY_TO_EXEC = `   SELECT
    p.device_id,
    p.Name,
    p.operStatus,
    p.if_index,
	CASE 
    WHEN p.operStatus = 1  THEN 'up'
    WHEN p.operStatus = 2  THEN 'down'
	WHEN p.operStatus = 6  THEN 'Not Present'
  END AS 'status',
    d.hostname,
    p.if_mac_address,
    ti.i_ts,
    ti.If_InOctets,
    ti.If_OutOctets,
    round(If_InOctets / 1000*100, 0) as inpercentage,
    round(If_OutOctets / 1000*100, 0) as outpercentage,
    Received_Hc_UniCast_Pkts,
    Received_UniCast_Pkts,
    if_speed / 1e9  as speed
  FROM
    interface_info AS p
  JOIN (
    SELECT
      device_id,
      port_name,
      MAX(i_ts) AS max_i_ts
    FROM
      traffic_info
   
    GROUP BY
      device_id, port_name
  ) AS max_ts
  ON
    p.device_id = max_ts.device_id
    AND p.Name = max_ts.port_name
  JOIN
    traffic_info AS ti
  ON
    max_ts.device_id = ti.device_id
    AND max_ts.port_name = ti.port_name
    AND max_ts.max_i_ts = ti.i_ts
JOIN
    devices  AS d
  ON
   d.device_id = ti.device_id
    AND max_ts.port_name = ti.port_name
    AND max_ts.max_i_ts = ti.i_ts
    join locations as l on l.device_id=d.device_id 
    ${mndlCndtnn}
  ORDER BY
    p.port_id ASC; `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : devicesinterface_infocountMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesinterface_infocountMdl = function (data) {
    var fnm = "devicesinterface_infocountMdl"
    var QRY_TO_EXEC = ` select COUNT(IF(operStatus IN (1, 2), 1, NULL)) AS Total_interface_info,
    format(COUNT(CASE WHEN operStatus = 1 THEN 1 ELSE NULL END), 'NO') AS 'UP',
    format(COUNT(CASE WHEN operStatus =2 THEN 1 ELSE NULL END), 'NO') AS 'Down'
from interface_info as p
join devices as d on d.id=p.id where p.id=${data.device_id} `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : downinterface_infolistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.downinterface_infolistMdl = function (data) {
  var fnm = "downinterface_infolistMdl"
  var QRY_TO_EXEC = `   SELECT
  p.id,
  p.Name,
  d.hostname,
  p.MACAddress,
  p.if_index,
   ti.i_ts, 
  ti.if_in_octets,
  ti.if_out_octets,
  round(if_in_octets / 1000*100, 0) as inpercentage,
  round(if_out_octets / 1000*100, 0) as outpercentage,
  Received_Hc_UniCast_Pkts,
  Received_UniCast_Pkts,
  Transmitted_Hc_UniCast_Pkts=-1 as speed,
  p.operStatus
FROM
  interface_info AS p
left JOIN (
  SELECT
    id,
    port_name,
    MAX(i_ts) AS max_i_ts
  FROM
    device_traffic_info

  GROUP BY
    id, port_name
) AS max_ts
ON
  p.id = max_ts.id
  AND p.Name = max_ts.port_name
left JOIN
  device_traffic_info AS ti
ON
  max_ts.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
left JOIN
  devices  AS d
ON
 d.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
WHERE
  p.operStatus=2
ORDER BY
  p.id ASC;   `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};




/*****************************************************************************
* Function : upinterface_infolistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.upinterface_infolistMdl = function (data) {
  var fnm = "upinterface_infolistMdl"
  // var QRY_TO_EXEC = `  SELECT
  // p.device_id,
  // p.Name,
  // d.hostname,
  // p.if_mac_address,
  // p.if_index,
   // ti.i_ts, 
  // ti.If_InOctets,
  // ti.If_OutOctets,
  // round(If_InOctets / 1000*100, 0) as inpercentage,
  // round(If_OutOctets / 1000*100, 0) as outpercentage,
  // Received_Hc_UniCast_Pkts,
  // Received_UniCast_Pkts,
  // Transmitted_Hc_UniCast_Pkts=-1 as speed,
  // p.operStatus
// FROM
  // interface_info AS p
// left JOIN (
  // SELECT
    // device_id,
    // port_name,
    // MAX(i_ts) AS max_i_ts
  // FROM
    // traffic_info

  // GROUP BY
    // device_id, port_name
// ) AS max_ts
// ON
  // p.device_id = max_ts.device_id
  // AND p.Name = max_ts.port_name
// left JOIN
  // traffic_info AS ti
// ON
  // max_ts.device_id = ti.device_id
  // AND max_ts.port_name = ti.port_name
  // AND max_ts.max_i_ts = ti.i_ts
// left JOIN
  // devices  AS d
// ON
 // d.device_id = ti.device_id
  // AND max_ts.port_name = ti.port_name
  // AND max_ts.max_i_ts = ti.i_ts
// WHERE
  // p.operStatus=1
// ORDER BY
  // p.port_id ASC;  `;  
  
  
 var QRY_TO_EXEC = `   SELECT
  p.id,
  p.Name,
  d.hostname,
  p.MACAddress,
  p.if_index,
   ti.i_ts, 
  ti.if_in_octets,
  ti.if_out_octets,
  round(if_in_octets / 1000*100, 0) as inpercentage,
  round(if_out_octets / 1000*100, 0) as outpercentage,
  Received_Hc_UniCast_Pkts,
  Received_UniCast_Pkts,
  Transmitted_Hc_UniCast_Pkts=-1 as speed,
  p.operStatus
FROM
  interface_info AS p
left JOIN (
  SELECT
    id,
    port_name,
    MAX(i_ts) AS max_i_ts
  FROM
    device_traffic_info

  GROUP BY
    id, port_name
) AS max_ts
ON
  p.id = max_ts.id
  AND p.Name = max_ts.port_name
left JOIN
  device_traffic_info AS ti
ON
  max_ts.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
left JOIN
  devices  AS d
ON
 d.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
WHERE
  p.operStatus=1
ORDER BY
  p.id ASC;   `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};



/*****************************************************************************
* Function : idwiseinterface_infolistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.idwiseinterface_infolistMdl = function (data) {
    var fnm = "idwiseinterface_infolistMdl"
    var QRY_TO_EXEC = `   SELECT
  p.id,
  p.Name,
  d.hostname,
  p.MACAddress,
  p.if_index,
   ti.i_ts, 
  ti.if_in_octets,
  ti.if_out_octets,
  round(if_in_octets / 1000*100, 0) as inpercentage,
  round(if_out_octets / 1000*100, 0) as outpercentage,
  Received_Hc_UniCast_Pkts,
  Received_UniCast_Pkts,
  Transmitted_Hc_UniCast_Pkts=-1 as speed,
  p.operStatus
FROM
  interface_info AS p
left JOIN (
  SELECT
    id,
    port_name,
    MAX(i_ts) AS max_i_ts
  FROM
    device_traffic_info

  GROUP BY
    id, port_name
) AS max_ts
ON
  p.id = max_ts.id
  AND p.Name = max_ts.port_name
left JOIN
  device_traffic_info AS ti
ON
  max_ts.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
left JOIN
  devices  AS d
ON
 d.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
WHERE
  p.id =${data.device_id}
ORDER BY
  p.id ASC;   `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : notpresentlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.notpresentlistMdl = function (data) {
  var fnm = "notpresentlistMdl"
  var QRY_TO_EXEC = `  SELECT
  p.id,
  p.Name,
  d.hostname,
  p.MACAddress,
  p.if_index,
   ti.i_ts, 
  ti.if_in_octets,
  ti.if_out_octets,
  round(if_in_octets / 1000*100, 0) as inpercentage,
  round(if_out_octets / 1000*100, 0) as outpercentage,
  Received_Hc_UniCast_Pkts,
  Received_UniCast_Pkts,
  Transmitted_Hc_UniCast_Pkts=-1 as speed,
  p.operStatus
FROM
  interface_info AS p
left JOIN (
  SELECT
    id,
    port_name,
    MAX(i_ts) AS max_i_ts
  FROM
    device_traffic_info

  GROUP BY
    id, port_name
) AS max_ts
ON
  p.id = max_ts.id
  AND p.Name = max_ts.port_name
left JOIN
  device_traffic_info AS ti
ON
  max_ts.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
left JOIN
  devices  AS d
ON
 d.id = ti.id
  AND max_ts.port_name = ti.port_name
  AND max_ts.max_i_ts = ti.i_ts
WHERE
  p.operStatus=6
ORDER BY
  p.id ASC; `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : AllstoragelistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.AllstoragelistMdl = function (data) {
  var fnm = "AllstoragelistMdl"
    var storage=``
    if(data.device_id){
      storage=` and d.id=${data.device_id} `
    }
  
  var QRY_TO_EXEC = `SELECT d.hostname,d.id,d.system_disk_type,
  (s.system_processor_frequency DIV 100) AS processor,
  ROUND(d.system_used_memory * 1024,0) AS used_Memory,
d.system_total_memory  AS total_memory,
  ROUND(((d.system_used_memory*1024) / (d.system_total_memory * 1024) * 100),0) AS percentage,
  ROUND(ABS(d.system_used_memory / d.system_total_memory * 100 - 100), 0) AS remaining_percentage,
  d.system_memory_type,
  ROUND(d.system_used_disk  * 1024) AS used_disk,
  ROUND(d.system_total_disk  * 1024) AS total_disk,
  round((d.system_used_disk  * 1024) / (d.system_total_disk  * 1024) *100,0) as storage_percentage,
  round(system_total_disk*1024 - system_used_disk*1024) as 'Remaining_storage',
  round(d.system_total_memory * 1024 - d.system_used_memory * 1024) as 'Remaining_memory',
  round( ABS((d.system_used_disk  * 1024 )/ (d.system_total_disk  * 1024) *100-100 )) as remaining_storage_percentage
FROM sensors_info AS s
JOIN System_description AS d ON d.id = s.id ${storage}  
`;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};


/*****************************************************************************
* Function : deletedeviceMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.deletedeviceMdl = function (data) {
  var fnm = "deletedeviceMdl"
  var QRY_TO_EXEC = `delete from devices where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : interface_infodeleteMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.interface_infodeleteMdl = function (data) {
  var fnm = "interface_infodeleteMdl"
  var QRY_TO_EXEC = `delete from interface_info where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : traffic_infodeleteMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.traffic_infodeleteMdl = function (data) {
  var fnm = "traffic_infodeleteMdl"
  var QRY_TO_EXEC = `delete from device_traffic_info where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : sensors_infodeleteMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensors_infodeleteMdl = function (data) {
  var fnm = "sensors_infodeleteMdl"
  var QRY_TO_EXEC = `delete from sensors_info where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : locationsMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationsMdl = function (data) {
  var fnm = "locationsMdl"
  var QRY_TO_EXEC = `delete from locations where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : System_descriptionMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.System_descriptionMdl = function (data) {
  var fnm = "System_descriptionMdl"
  var QRY_TO_EXEC = `delete from System_description where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : deletedevicedropdownlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.deletedevicedropdownlistMdl = function (data) {
  var fnm = "deletedevicedropdownlistMdl"
  var QRY_TO_EXEC = ` select hostname,id from devices   `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : notificationMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.notificationMdl = function (data) {
  var fnm = "notificationMdl"
  var QRY_TO_EXEC = ` select id,hostname VALUE , 'Device Down' descrip,datediff(current_timestamp(),updated_at) as days from devices where status =0;   `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : detaildeviceuplistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detaildeviceuplistMdl = function (data) {
  var fnm = "detaildeviceuplistMdl"
  var QRY_TO_EXEC = `   select d.hostname, di.system_uptime, di.system_description, d.id, di.system_name, COUNT(p.id) AS port_count
  FROM devices AS d
  left join  System_description as di on di.id = d.id
  left join interface_info AS p on p.id = d.id
  where di.ip_status=1
  group by d.hostname, di.system_uptime, di.system_description, d.id, di.system_name;  `
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : basicdeviceuplistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.basicdeviceuplistMdl = function (data) {
  var fnm = "basicdeviceuplistMdl"
  var QRY_TO_EXEC = `   select d.hostname,di.system_description,di.system_uptime,d.id from devices as d 
  join System_description as di on di.id=d.id 
  where di.ip_status=1 group by d.id    `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : detaildevicedownlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detaildevicedownlistMdl = function (data) {
  var fnm = "detaildevicedownlistMdl"
  var QRY_TO_EXEC = `    select d.hostname, di.system_uptime, di.system_description, d.id, di.system_name,di.ip_status, COUNT(p.id) AS port_count
  FROM devices AS d
  left join  System_description as di on di.id = d.id
  left join interface_info AS p on p.id = d.id
  where di.ip_status=0
  group by d.hostname, di.system_uptime, di.system_description, d.id, di.system_name;     `
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : basicdevicedownlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.basicdevicedownlistMdl = function (data) {
  var fnm = "basicdevicedownlistMdl"
  var QRY_TO_EXEC = `select d.hostname,di.system_description,di.system_uptime,d.id from devices as d 
  join System_description as di on di.id=d.id 
  where di.ip_status=0 group by d.id  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : eventlogsMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.eventlogsMdl = function (data) {
  var fnm = "eventlogsMdl"
  var QRY_TO_EXEC = `    select hostname,date_format(event_time,'%Y-%m-%d %H:%i:%s')as event_time,event_message from EventLogs order by event_time desc limit 100;
      `
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : basicdevicedownlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.basicdevicedownlistMdl = function (data) {
  var fnm = "basicdevicedownlistMdl"
  var QRY_TO_EXEC = `    select d.hostname, di.system_uptime, di.system_description, d.id, di.system_name, COUNT(p.id) AS port_count
  FROM devices AS d
  left join  System_description as di on di.id = d.id
  left join interface_info AS p on p.id = d.id
  where d.ignores=1
  group by d.hostname, di.system_uptime, di.system_description, d.id, di.system_name   
    `
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : ignoredetailsMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ignoredetailsMdl = function (data) {
  var fnm = "ignoredetailsMdl"
  var QRY_TO_EXEC = `  select d.hostname, di.system_uptime, di.system_description, d.id, di.system_name, COUNT(p.id) AS port_count
  FROM devices AS d
  left join  System_description as di on di.id = d.id
  left join interface_info AS p on p.id = d.id
  where d.ignores=1
  group by d.hostname, di.system_uptime, di.system_description, d.id, di.system_name;   `
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : disablelistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.disablelistMdl = function (data) {
  var fnm = "disablelistMdl"
  var QRY_TO_EXEC = `select d.hostname, di.system_uptime, di.system_description, d.id, di.system_name, COUNT(p.id) AS port_count
  FROM devices AS d
  left join  System_description as di on di.id = d.id
  left join interface_info AS p on p.id = d.id
  where d.disabled=1
  group by d.hostname, di.system_uptime, di.system_description, d.id, di.system_name;   `
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : detailsstatuspageMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detailsstatuspageMdl = function (data) {
  var fnm = "detailsstatuspageMdl"
  var memory=``
    if(data.device_id){
      memory=` where d.id=${data.device_id} `
    }
  var QRY_TO_EXEC = ` SELECT 
  d.ip_status,
   d.id,
   d.hostname,
   (s.system_processor_frequency DIV 100) AS processor,
   d.system_uptime,
   ROUND(d.system_used_memory * 1024,0) AS used_Memory,
 d.system_total_memory  AS total_memory,
   ROUND(((d.system_used_memory*1024) / (d.system_total_memory * 1024) * 100),0) AS percentage,
   ROUND(ABS(d.system_used_memory / d.system_total_memory * 100 - 100), 0) AS remaining_percentage,
   d.system_memory_type,
   ROUND(d.system_used_disk  * 1024) AS used_disk,
   ROUND(d.system_total_disk  * 1024) AS total_disk,
   round((d.system_used_disk  * 1024) / (d.system_total_disk  * 1024) *100,0) as storage_percentage,
   round(system_total_disk*1024 - system_used_disk*1024) as 'Remaining_storage',
   round(d.system_total_memory * 1024 - d.system_used_memory * 1024) as 'Remaining_memory',
   round( ABS((d.system_used_disk  * 1024 )/ (d.system_total_disk  * 1024) *100-100 )) as remaining_storage_percentage
 FROM sensors_info AS s
 JOIN System_description AS d ON d.id = s.id   
 ${memory}
   `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : geolocationMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.geolocationMdl = function (data) {
  var fnm = "geolocationMdl"
  var QRY_TO_EXEC = `INSERT INTO locations (name) values ('${data.name}') `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : sensorpresentlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensorpresentlistMdl = function (data) {
  var fnm = "sensorpresentlistMdl"
  var sensor=``;
  if(data.device_id){
    sensor=` and di.id=${data.device_id}` 
  }
  var QRY_TO_EXEC = ` 
  select  s.id, di.hostname,s.system_voltage value, 'voltage' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
where s.system_voltage not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_activefan value, 'activefan' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_activefan not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_temperature value, 'Temperature' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_temperature not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_fanspeed value, 'Fanspeed' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_fanspeed not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_processor_temp value, 'Processor_temp' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_processor_temp not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_power value, 'Power' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_power not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_current value, 'Current' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_current not in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_processor_frequency value, 'Processor_Frequency' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
where s.system_processor_frequency not in ('No Such Object currently exists at this OID')${sensor}
  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : sensordownlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensordownlistMdl = function (data) {
  var fnm = "sensordownlistMdl"
  var sensor=``;
  if(data.device_id){
    sensor=` and di.id=${data.device_id}` 
  }
  var QRY_TO_EXEC = `   select  s.id, di.hostname,s.system_voltage value, 'voltage' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
where s.system_voltage in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_activefan value, 'activefan' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_activefan in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_temperature value, 'Temperature' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_temperature in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_fanspeed value, 'Fanspeed' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_fanspeed in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_processor_temp value, 'Processor_temp' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_processor_temp  in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_power value, 'Power' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_power in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_current value, 'Current' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
  where s.system_current in ('No Such Object currently exists at this OID')${sensor}
  union all
  select  s.id, di.hostname,s.system_processor_frequency value, 'Processor_Frequency' descrip
  from sensors_info as s
  join System_description as di on s.id=di.id
where s.system_processor_frequency in ('No Such Object currently exists at this OID')${sensor}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : ignoredeviceMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ignoredeviceMdl = function (data) {
  var fnm = "ignoredeviceMdl"
  var QRY_TO_EXEC = `update devices set ignores = 1 where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : unignoredeviceMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.unignoredeviceMdl = function (data) {
  var fnm = "unignoredeviceMdl"
  var QRY_TO_EXEC = `update devices set ignores = 0 where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : ignorelistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ignorelistMdl = function (data) {
  var fnm = "ignorelistMdl"
  var QRY_TO_EXEC = ` select id,hostname from devices where ignores=1  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : notignorelistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.notignorelistMdl = function (data) {
  var fnm = "notignorelistMdl"
  var QRY_TO_EXEC = ` select id,hostname from devices where ignores=0  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : locationslistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationslistMdl = function (data) {
  var fnm = "locationslistMdl"
  var QRY_TO_EXEC = ` select * from Locations  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : idwiseeventlogsMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.idwiseeventlogsMdl = function (data) {
  var fnm = "idwiseeventlogsMdl"
  var QRY_TO_EXEC = `  select hostname,date_format(event_time,'%Y-%m-%d %H:%i:%s')as event_time,event_message from EventLogs where hostname='${data.hostname}' order by event_time  desc limit 100;`;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : locationaddMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationaddMdl = function (data) {
  var fnm = "locationaddMdl"
  var QRY_TO_EXEC = ` INSERT INTO Locations(device_id,name) VALUES (${data.device_id},'${data.name}') `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};


/*****************************************************************************
 * Function : propertiesinterface_infoMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.propertiesinterface_infoMdl = function (data) {
  var fnm = "propertiesinterface_infoMdl"
  var QRY_TO_EXEC = ` SELECT
  p.id,
  p.Name,
  p.port_disable_status,
  p.operStatus,
   d.hostname,
  p.MACAddress,
  p.if_index, 
  p.port_alert_status,
case when p.operStatus=1 then 'UP' else 'down' end as status ,
round( p.if_speed/1000/1000/1000,1) as speed
  from interface_info as p
  join devices as d on d.id=p.id
  where p.id=${data.device_id}`;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : devicesettingMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesettingMdl = function (data) {
  var fnm = "devicesettingMdl"
  var QRY_TO_EXEC = `  update devices set version ='${data.version}',transport='${data.transport}',udp_port=${data.udp_port},
  timeout=${data.timeout},retries=${data.retries},community_str='${data.community_str}' where id=${data.device_id}; `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : arplistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.arplistMdl = function (data) {
  var fnm = "arplistMdl"
  var QRY_TO_EXEC = ` select * from ARP_protocol where id=${data.device_id}; `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
 * Function : checkpasswordMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.checkpasswordMdl = function (data) {
  var fnm = "checkpasswordMdl"
  var QRY_TO_EXEC = ` select user_password  from users_dtl_t where  user_id=${data.user_id} and user_password=SHA1('${data.user_password}') and user_status=1` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}
/*****************************************************************************
 * Function : updatepasswordMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.updatepasswordMdl = function (data,decrypt) {
  var fnm = "updatepasswordMdl"
  var QRY_TO_EXEC = ` update users_dtl_t set user_password='${decrypt}' where user_id=${data.user_id}; ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : roleaddMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.roleaddMdl = function (data,decrypt) {
  var fnm = "roleaddMdl"
  var QRY_TO_EXEC = `  insert into user_roles (role_name,role_description,add_device_perm,delet_device_perm,discovery_perm,propertirs_perm,snmp_perm,user_create_perm,roles_creations_perm,status_propertie_perm,interface_info_properties) values ('${data.role_name}','${data.role_description}',${data.add_device_perm},${data.deletedevice},${data.discovery_perm},${data.propertirs_perm},${data.snmp_perm},${data.user_create_perm},${data.roles_creations_perm},${data.status_propertie_perm},${data.interface_info_properties})  ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : portdisableMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.portdisableMdl = function (data,decrypt) {
  var fnm = "portdisableMdl"
  var disable=``;
  if(data.port_disable_status && data.port_alert_status){
    disable= ` port_disable_status=${data.port_disable_status} and port_alert_status=${data.port_alert_status} `
   
  }
  else if(data.port_disable_status){
    disable=` port_disable_status=${data.port_disable_status}`
  }
  else if(data.port_alert_status){
    disable=` port_alert_status=${data.port_alert_status}`
  }
  var QRY_TO_EXEC = ` update interface_info set ${disable} where id=${data.device_id} and if_index=${data.if_index};  ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : devicefilterMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicefilterMdl = function (data,decrypt) {
  var fnm = "devicefilterMdl"

  var mndlCndtn = ``;
  if(data.device_id && data.location_id && data.sys_os && data.sys_hardware){
    mndlCndtn =`and d.id=${data.device_id} and l.Location_id=${data.location_id} and di.system_os='${data.sys_os}'  and di.system_hardware='${data.sys_hardware}' `
  }
  else if(data.device_id && !data.location_id && !data.sys_os && !data.sys_hardware ){
    mndlCndtn =`and d.id=${data.device_id}  `
  }
  else if(!data.device_id && data.location_id && !data.sys_os && !data.sys_hardware){
    mndlCndtn =` and l.Location_id=${data.location_id}  `
  }
 else  if(!data.device_id && !data.location_id && data.sys_os && !data.sys_hardware){
    mndlCndtn =` and di.system_os='${data.sys_os}' `
  }
  else if(!data.device_id && !data.location_id && !data.sys_os && data.sys_hardware){
    mndlCndtn =` and di.system_hardware='${data.sys_hardware}' `
  }
  else if(data.device_id && data.location_id && data.sys_os && !data.sys_hardware){
    mndlCndtn =`and d.device_id=${data.device_id} and l.location_id=${data.location_id} and di.system_os='${data.sys_os}'   `
  }
  else if(data.device_id && data.location_id && !data.sys_os && data.sys_hardware){
    mndlCndtn =`and d.id=${data.device_id} and l.Location_id=${data.location_id}  and di.system_hardware='${data.sys_hardware}' `
  }
  else if(data.device_id && !data.location_id && data.sys_os && data.sys_hardware){
    mndlCndtn =`and d.id=${data.device_id}  and di.system_os='${data.sys_os}'  and di.system_hardware='${data.sys_hardware}' `
  }
  else if(!data.device_id && data.location_id && data.sys_os && data.sys_hardware){
    mndlCndtn =` and l.Location_id=${data.location_id} and di.system_os='${data.sys_os}'  and di.system_hardware='${data.sys_hardware}' `
  }
  else if(data.device_id && data.location_id && !data.sys_os && !data.sys_hardware){
    mndlCndtn =`and d.id=${data.device_id} and l.Location_id=${data.location_id}  `
  }
  else if(data.device_id && !data.location_id && !data.sys_os && data.sys_hardware){
    mndlCndtn =`and d.id=${data.device_id}   and di.system_hardware='${data.sys_hardware}' `
  }
  else if(!data.device_id && !data.location_id && data.sys_os && data.sys_hardware){
    mndlCndtn =` and di.system_os='${data.sys_os}'  and di.system_hardware='${data.sys_hardware}' `
  }
  else if(!data.device_id && data.location_id && !data.sys_os && data.sys_hardware){
    mndlCndtn =` and l.Location_id=${data.location_id}  and di.system_hardware='${data.sys_hardware}' `
  }

 
  var QRY_TO_EXEC = ` select di.ip_status,d.hostname,di.system_description,di.system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_system_uptime,d.device_id,COUNT(p.device_id) AS port_count from devices as d 
  left join System_description as di on di.device_id=d.device_id 
  left join locations as l on l.device_id=d.device_id
  left join interface_info AS p on p.device_id = d.device_id
  where d.ignores=0 and d.disabled=0 ${mndlCndtn}  group by d.device_id;   ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}


/*****************************************************************************
 * Function : devicesettingsMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesettingsMdl = function (data,decrypt,length) {
  var fnm = "devicesettingsMdl"
   var device_type=``;
  var description=``;
   var device_ignore=``;
   var disabled=``;
  if (data.description != null && data.description != '' && data.description != undefined) {
    description = `description='${data.description}'`
  }
  if (data.device_type != null && data.device_type != '' && data.device_type != undefined) {
    device_type = `,device_type ='${data.device_type}'`
  }
  if (data.device_ignore != null && data.device_ignore != '' && data.device_ignore != undefined) {
    device_ignore = `,ignores =${data.device_ignore}`
  }
  if (data.disabled != null && data.disabled != '' && data.disabled != undefined) {
    disabled = `,disabled =${data.disabled}`
  }

  var QRY_TO_EXEC = `  update devices set ${description} ${device_type} ${device_ignore} ${disabled} where id=${data.device_id} ;   ` ;
  if(length == 0){
    if(data.location){
      var QRY_TO_EXEC =` update Locations set name='${data.name}' where device_id=${data.device_id}  `
    }
  }
  
  
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : locationlistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationlistMdl = function (data,decrypt) {
  var fnm = "locationlistMdl"
  var QRY_TO_EXEC = ` select * from Locations group by name  ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : oslistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.oslistMdl = function (data,decrypt) {
  var fnm = "oslistMdl"
  var QRY_TO_EXEC = ` select system_os from System_description  group by system_os ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : hardwarelistMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.hardwarelistMdl = function (data,decrypt) {
  var fnm = "hardwarelistMdl"
  var QRY_TO_EXEC = `select system_hardware from System_description  group by system_hardware ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : locationpresentMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationpresentMdl = function (data,decrypt) {
  var fnm = "locationpresentMdl"
  var QRY_TO_EXEC = ` select * from Locations where name='${data.name}' ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}


/*****************************************************************************
 * Function : neighboursMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.neighboursMdl = function (data,decrypt) {
  var fnm = "neighboursMdl"
  var QRY_TO_EXEC = ` SELECT * FROM NDP_protocol where id=${data.device_id} ` ;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
}

/*****************************************************************************
 * Function : arpdeleteMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.arpdeleteMdl = function (data) {
  var fnm = "arpdeleteMdl"
  var QRY_TO_EXEC = `delete from ARP_protocol where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
 * Function : ndpdeleteMdl
* Description : this will shoows the interface_info list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ndpdeleteMdl = function (data) {
  var fnm = "ndpdeleteMdl"
  var QRY_TO_EXEC = `delete from NDP_protocol where id=${data.device_id}  `;
  console.log(QRY_TO_EXEC);
  return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};


/*****************************************************************************
* Function : detailedportslistMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detailedportslistMdl = function (data) {
    var fnm = "detailedportslistMdl"
    var QRY_TO_EXEC = ` SELECT
    CASE WHEN p.operStatus = 1 THEN p.Name  END AS up,
    CASE WHEN p.operStatus = 2 THEN p.Name END AS down,
    p.if_index
    
FROM
    devices AS d
    JOIN interface_info AS p ON p.id = d.id
WHERE
    d.id  =${data.device_id} ;`;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : devicesportscountMdl
* Description : this will shoows the ports list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesportscountMdl = function (data) {
    var fnm = "devicesportscountMdl"
    var QRY_TO_EXEC = ` select COUNT(IF(operStatus IN (1, 2), 1, NULL)) AS Total_Ports,
    format(COUNT(CASE WHEN operStatus = 1 THEN 1 ELSE NULL END), 'NO') AS 'UP',
    format(COUNT(CASE WHEN operStatus =2 THEN 1 ELSE NULL END), 'NO') AS 'Down'
from interface_info as p
join devices as d on d.id=p.id where p.id=${data.device_id} `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};
/*****************************************************************************
* Function : devicessensorslstMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicessensorslstMdl = function (data) {
    var fnm = "devicessensorslstMdl"
    var QRY_TO_EXEC = ` 

    SELECT 
        d.community_str,
        d.udp_port,
        ROUND(s.system_voltage / 10, 3) AS voltage,
        d.hostname AS 'device',
        s.system_activefan,
        ROUND(s.system_temperature / 10) AS system_tempereature,
        s.system_fanspeed,
        ROUND(s.system_processor_temp / 10) AS Processor_temperature,
        ROUND(s.system_power / 10, 3) AS power,
        ROUND(s.system_current / 1000, 2) AS Current,
        ROUND(s.system_processor_frequency / 1000, 2) AS frequency,
        case when s.system_primary_powersupplyrate= 1 then 'true' else 'false' end  as system_primary_powersupplyrate,
        case when s.system_backup_powersupplyrate = 1 then 'true' else 'false' end as system_backup_powersupplyrate
    FROM
        sensors_info AS s
    JOIN
        devices AS d ON d.id = s.id
    WHERE
        d.id =${data.device_id}  `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : allportslistMdl
* Description : this model shows all ports list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.allportslistMdl = function (data) {
    var fnm = "allportslistMdl"
    var mndlCndtnn=``;
    if(data.hostname && data.if_name && data.if_oper_status && data.location_id ){
      mndlCndtnn =` where  d.hostname='${data.hostname}' and p.Name='${data.if_name}' and p.operStatus=${data.if_oper_status}  and l.location_id=${data.location_id} `
    }
    else if(data.hostname && !data.if_name && !data.if_oper_status && !data.location_id ){
      mndlCndtnn =` where d.hostname='${data.hostname}'  `
    }
   else  if(!data.hostname && data.if_name && !data.if_oper_status && !data.location_id ){
      mndlCndtnn =`where  p.Name='${data.if_name}'  `
    }
   else  if(!data.hostname && !data.if_name && data.if_oper_status && !data.location_id ){
      mndlCndtnn =`where  p.operStatus=${data.if_oper_status}   `
    }
    else if(!data.hostname && !data.if_name && !data.if_oper_status && data.location_id ){
      mndlCndtnn =`where  l.location_id=${data.location_id} `
    }
   else  if(data.hostname && data.if_name && !data.if_oper_status && !data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and p.Name='${data.if_name}'  `
    }
   else if(data.hostname && !data.if_name && data.if_oper_status && !data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}'  and p.operStatus=${data.if_oper_status}   `
    }
    else if(data.hostname && !data.if_name && !data.if_oper_status && data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}'   and l.location_id=${data.location_id} `
    }
   else if(!data.hostname && data.if_name && data.if_oper_status && !data.location_id ){
      mndlCndtnn =`where  p.Name='${data.if_name}' and p.operStatus=${data.if_oper_status}   `
    }
    else if(!data.hostname && !data.if_name && data.if_oper_status && data.location_id ){
      mndlCndtnn =`where p.operStatus=${data.if_oper_status}  and l.location_id=${data.location_id} `
    }
    else if(data.hostname && data.if_name && data.if_oper_status && !data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and p.Name='${data.if_name}' and p.operStatus=${data.if_oper_status}  `
    }
    else if(data.hostname && data.if_name && !data.if_oper_status && data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and p.Name='${data.if_name}'  and l.location_id=${data.location_id} `
    }
    else if(data.hostname && !data.if_name && data.if_oper_status && data.location_id ){
      mndlCndtnn =`where d.hostname='${data.hostname}' and  p.operStatus=${data.if_oper_status}  and l.location_id=${data.location_id} `
    }
    else if(!data.hostname && !data.if_name && data.if_oper_status && data.location_id ){
      mndlCndtnn =`where p.Name='${data.if_name}' and p.operStatus=${data.if_oper_status}  and l.location_id=${data.location_id} `
    }
    var QRY_TO_EXEC = `   SELECT
    p.id,
    p.Name,
    p.operStatus,
    p.if_index,
	CASE 
    WHEN p.operStatus = 1  THEN 'up'
    WHEN p.operStatus = 2  THEN 'down'
	WHEN p.operStatus = 6  THEN 'Not Present'
  END AS 'status',
    d.hostname,
    p.MACAddress,
    ti.i_ts,
    ti.if_in_octets,
    ti.if_out_octets,
    round(if_in_octets / 1000*100, 0) as inpercentage,
    round(if_out_octets / 1000*100, 0) as outpercentage,
    Received_Hc_UniCast_Pkts,
    Received_UniCast_Pkts,
    if_speed / 1e9  as speed
  FROM
    interface_info AS p
 left JOIN (
    SELECT
      id,
      port_name,
      MAX(i_ts) AS max_i_ts
    FROM
      device_traffic_info
   
    GROUP BY
      id, port_name
  ) AS max_ts
  ON
    p.id = max_ts.id
    AND p.Name = max_ts.port_name
 left JOIN
    device_traffic_info AS ti
  ON
    max_ts.id = ti.id
    AND max_ts.port_name = ti.port_name
    AND max_ts.max_i_ts = ti.i_ts
left JOIN
    devices  AS d
  ON
   d.id = ti.id
    AND max_ts.port_name = ti.port_name
    AND max_ts.max_i_ts = ti.i_ts
  left  join Locations as l on l.device_id=d.id 
    ${mndlCndtnn}
  ORDER BY
    p.inf_id ASC; `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};

/*****************************************************************************
* Function : sensorslistMdl
* Description : this will shoows the devices list
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensorslistMdl = function (data) {
    var fnm = "sensorslistMdl"
    var sensor=``;
    if(data.device_id){
      sensor=`where di.id=${data.device_id}`
    }
    var QRY_TO_EXEC = ` select  s.id, di.hostname,s.system_voltage value, 'voltage' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_activefan value, 'activefan' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_temperature value, 'Temperature' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_fanspeed value, 'Fanspeed' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_processor_temp value, 'Processor_temp' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_power value, 'Power' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_current value, 'Current' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id

     union all
     select  s.id, di.hostname,s.system_processor_frequency value, 'Processor_Frequency' descrip
     from sensors_info as s
     join System_description as di on s.id=di.id
    ${sensor}
    `;
    console.log(QRY_TO_EXEC);
    return dbutil.execQuery(sqldb.MySQLConPool, QRY_TO_EXEC, cntxtDtls, '', fnm);
};