var appRoot ='/';
var dashboardMdl = require('../../models/devices/devicesMdl');
var df = require( '../../../../utils/dflower.utils');
var cntxtDtls = df.getModuleMetaData(__dirname, __filename);
const sha1 = require('sha1');


/******************************************************************************************************
 * Controller : dropdownlistCtrl
 * Description : this model shows dropdown of a search filter
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
 exports.dropdownlistCtrl=(req,res)=>{
	 dashboardMdl.dropdownlistMdl(req.body,req.user).then(function(results){
		console.log(results)
		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	 }).catch(function(error){
		console.log(error)
		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	 });
 }
 
 /******************************************************************************************************
  * Controller : devicesindetailedCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
 exports.devicesindetailedCtrl=(req,res)=>{
    dashboardMdl.devicesindetailedMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
}
/******************************************************************************************************
  * Controller : devicessensorslstCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.devicessensorslstCtrl=(req,res)=>{
    dashboardMdl.devicessensorslstMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
}
/******************************************************************************************************
  * Controller : devicebasiclstCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.devicebasiclstCtrl=(req,res)=>{
   dashboardMdl.devicebasiclstMdl(req.body,req.user).then(function(results){
      console.log(results)
       df.formatSucessRes(req,res,results,cntxtDtls,'',{});
   }).catch(function(error){
      console.log(error)
       df.formatErrorRes(req,res,error,cntxtDtls,'',{});
   });
}
/******************************************************************************************************
  * Controller : processorindetailCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.processorindetailCtrl=(req,res)=>{
    dashboardMdl.processorindetailMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 }
 /******************************************************************************************************
  * Controller : devicebasiclstcountCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.devicebasiclstcountCtrl=(req,res)=>{
    dashboardMdl.devicebasiclstcountMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 }
  /******************************************************************************************************
  * Controller : sensorslistCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.sensorslistCtrl=(req,res)=>{
    dashboardMdl.sensorslistMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 }

/******************************************************************************************************
  * Controller : detailedportslistCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.detailedportslistCtrl=(req,res)=>{
    dashboardMdl.detailedportslistMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 }

 /******************************************************************************************************
  * Controller : allportslistCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.allportslistCtrl=(req,res)=>{
    dashboardMdl.allportslistMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 }
  /******************************************************************************************************
  * Controller : devicesportscountCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.devicesportscountCtrl=(req,res)=>{
    dashboardMdl.devicesportscountMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 } 
   /******************************************************************************************************
  * Controller : idwiseportslistCtrl
 * Description : this will shoows the complete details of that device
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
exports.idwiseportslistCtrl=(req,res)=>{
    dashboardMdl.idwiseportslistMdl(req.body,req.user).then(function(results){
       console.log(results)
        df.formatSucessRes(req,res,results,cntxtDtls,'',{});
    }).catch(function(error){
       console.log(error)
        df.formatErrorRes(req,res,error,cntxtDtls,'',{});
    });
 } 

/*****************************************************************************
* Function : downportslistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.downportslistCtrl=(req,res)=>{
	dashboardMdl.downportslistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/*****************************************************************************
* Function : upportslistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.upportslistCtrl=(req,res)=>{
	dashboardMdl.upportslistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/*****************************************************************************
* Function : notpresentlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.notpresentlistCtrl=(req,res)=>{
	dashboardMdl.notpresentlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

// /***************************************************************************
// * Function : AllstoragelistCtrl
// * Description : this model gives the list of a sensorslst 
// * Arguments : callback function
// * 04-11-2023 - RajKumar
// *
// ******************************************************************************/
exports.AllstoragelistCtrl=(req,res)=>{
	dashboardMdl.AllstoragelistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

// /***************************************************************************
// * Function : deletedeviceCtrl
// * Description : this model gives the list of a sensorslst 
// * Arguments : callback function
// * 04-11-2023 - RajKumar
// *
// ******************************************************************************/
// exports.deletedeviceCtrl=(req,res)=>{
// 	dashboardMdl.deletedeviceMdl(req.body,req.user).then(function(results){
// 	   console.log(results)
// 		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
// 	}).catch(function(error){
// 	   console.log(error)
// 		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 	});
// 	dashboardMdl.device_infoMdl(req.body,req.user).then(function(results){
// 		console.log(results)
// 		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
// 	 }).catch(function(error){
// 		console.log(error)
// 		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 	 });
// 	 dashboardMdl.portsdeleteMdl(req.body,req.user).then(function(results){
// 		console.log(results)
// 		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
// 	 }).catch(function(error){
// 		console.log(error)
// 		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 	 });
// 	 dashboardMdl.traffic_infodeleteMdl(req.body,req.user).then(function(results){
// 		console.log(results)
// 		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
// 	 }).catch(function(error){
// 		console.log(error)
// 		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 	 });
// 	 dashboardMdl.sensorsdeleteMdl(req.body,req.user).then(function(results){
// 		console.log(results)
// 		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
// 	 }).catch(function(error){
// 		console.log(error)
// 		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 	 });
// 	 dashboardMdl.locationsMdl(req.body,req.user).then(function(results){
// 		console.log(results)
// 		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
// 	 }).catch(function(error){
// 		console.log(error)
// 		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 	 });
// }

/***************************************************************************
* Function : deletedeviceCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.deletedeviceCtrl=(req,res)=>{
	dashboardMdl.deletedeviceMdl(req.body,req.user).then(function(results){
		dashboardMdl.device_infoMdl(req.body,req.user).then(function(results){
			dashboardMdl.portsdeleteMdl(req.body,req.user).then(function(results){
				dashboardMdl.traffic_infodeleteMdl(req.body,req.user).then(function(results){
					dashboardMdl.sensorsdeleteMdl(req.body,req.user).then(function(results){
						dashboardMdl.locationsMdl(req.body,req.user).then(function(results){
							dashboardMdl.arpdeleteMdl(req.body,req.user).then(function(results){
								dashboardMdl.ndpdeleteMdl(req.body,req.user).then(function(results){
										df.formatSucessRes(req,res,results,cntxtDtls,'',{});	
									}).catch(function(error){
									console.log(error)
										df.formatErrorRes(req,res,error,cntxtDtls,'',{});
									});		
								}).catch(function(error){
								console.log(error)
									df.formatErrorRes(req,res,error,cntxtDtls,'',{});
								});		
							}).catch(function(error){
							console.log(error)
								df.formatErrorRes(req,res,error,cntxtDtls,'',{});
							});	
					}).catch(function(error){
					console.log(error)
						df.formatErrorRes(req,res,error,cntxtDtls,'',{});
					});
				}).catch(function(error){
				console.log(error)
					df.formatErrorRes(req,res,error,cntxtDtls,'',{});
				});
			}).catch(function(error){
			console.log(error)
				df.formatErrorRes(req,res,error,cntxtDtls,'',{});
			});
		 }).catch(function(error){
			console.log(error)
			 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
		 });
		
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : deletedevicedropdownlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.deletedevicedropdownlistCtrl=(req,res)=>{
	dashboardMdl.deletedevicedropdownlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : notificationCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.notificationCtrl=(req,res)=>{
	dashboardMdl.notificationMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : detaildeviceuplistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detaildeviceuplistCtrl=(req,res)=>{
	dashboardMdl.detaildeviceuplistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : basicdeviceuplistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.basicdeviceuplistCtrl=(req,res)=>{
	dashboardMdl.basicdeviceuplistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : detaildevicedownlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detaildevicedownlistCtrl=(req,res)=>{
	dashboardMdl.detaildevicedownlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : basicdevicedownlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.basicdevicedownlistCtrl=(req,res)=>{
	dashboardMdl.basicdevicedownlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : eventlogsCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.eventlogsCtrl=(req,res)=>{
	dashboardMdl.eventlogsMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : ignoredetailsCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ignoredetailsCtrl=(req,res)=>{
	dashboardMdl.ignoredetailsMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : disablelistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.disablelistCtrl=(req,res)=>{
	dashboardMdl.disablelistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : detailsstatuspageCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.detailsstatuspageCtrl=(req,res)=>{
	dashboardMdl.detailsstatuspageMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : geolocationCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.geolocationCtrl=(req,res)=>{
	dashboardMdl.geolocationMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : sensorpresentlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensorpresentlistCtrl=(req,res)=>{
	dashboardMdl.sensorpresentlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});

}

/***************************************************************************
* Function : sensordownlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.sensordownlistCtrl=(req,res)=>{
	dashboardMdl.sensordownlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : ignoredeviceCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ignoredeviceCtrl=(req,res)=>{
	dashboardMdl.ignoredeviceMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : unignoredeviceCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.unignoredeviceCtrl=(req,res)=>{
	dashboardMdl.unignoredeviceMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : ignorelistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.ignorelistCtrl=(req,res)=>{
	dashboardMdl.ignorelistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : notignorelistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.notignorelistCtrl=(req,res)=>{
	dashboardMdl.notignorelistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : locationsCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationsCtrl=(req,res)=>{
	dashboardMdl.locationslistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : idwiseeventlogsCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.idwiseeventlogsCtrl=(req,res)=>{
	dashboardMdl.idwiseeventlogsMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : locationaddCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationaddCtrl=(req,res)=>{
	dashboardMdl.locationaddMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}


/***************************************************************************
* Function : propertiesportsCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.propertiesportsCtrl=(req,res)=>{
	dashboardMdl.propertiesportsMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}


/***************************************************************************
* Function : devicesettingCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesettingCtrl=(req,res)=>{
	dashboardMdl.devicesettingMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}


/***************************************************************************
* Function : arplistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.arplistCtrl=(req,res)=>{
	dashboardMdl.arplistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}


/***************************************************************************
* Function : updatepasswordCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
// exports.updatepasswordCtrl=(req,res)=>{
// 	dashboardMdl.checkpasswordMdl(req.body,req.user).then(function(result){
// 		console.log(result.length,'')
// 		if(result.length==1){
// 			console.log(result) 
// 			const old_password=result[0].user_password
// 			console.log(old_password,'old_password')
// 			const  new_password=req.body.password
// 			const decrypt=sha1(new_password)
// 			console.log(new_password,'new_password')
// 			console.log(decrypt,'sah1111111111111')
			
// 			console.log('inside looppppppp')
// 				if(old_password==decrypt){
// 					console.log('inside looooppppppp2')
// 					const messag='Old Password And New Password Must Be Different '
// 					df.formatSucessRes(req,res,messag,cntxtDtls,'',{message:messag});
// 				}
// 				else{
// 						const decrypt=sha1(new_password)
// 						console.log(decrypt,'-----------------------')
// 						dashboardMdl.updatepasswordMdl(req.body,req.user,decrypt).then(function(results){
// 						const mess='Password Updated Successfully'
// 						df.formatSucessRes(req,res,results,cntxtDtls,'',{message:mess});
// 						}).catch(function(error){
// 							console.log(error)
// 							df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 					});
// 				}
// 		   }
// 		   else{
// 			const message='Old Password Is Wrong'
// 			df.formatSucessRes(req,res,message,cntxtDtls,'',{message:message});
// 				}
// 			}).catch(function(error){
// 					console.log(error)
// 					df.formatErrorRes(req,res,error,cntxtDtls,'',{});
// 			});
	  
	   
	   
// }
exports.updatepasswordCtrl = (req, res) => {
	dashboardMdl.checkpasswordMdl(req.body, req.user).then(function (result) {
	  console.log(result.length, '');
  
	  if (result.length === 1) {
		console.log(result);
		const old_password = result[0].user_password;
		console.log(old_password, 'old_password');
		const new_password = req.body.password;
		const decrypt = sha1(new_password);
		console.log(new_password, 'new_password');
		console.log(decrypt, 'sha1');
  
		console.log('inside looppppppp');
  
		if (old_password === decrypt) {
		  console.log('inside looooppppppp2');
		  const messag = 'Old Password And New Password Must Be Different ';
		  df.formatSucessRes(req, res, messag, cntxtDtls, '', { message: messag });
		} else {
		  // Remove the inner declaration of decrypt
		  console.log(decrypt, '-----------------------');
		  dashboardMdl.updatepasswordMdl(req.body, decrypt, req.user, )
			.then(function (results) {
			  const mess = 'Password Updated Successfully';
			  df.formatSucessRes(req, res, results, cntxtDtls, '', { message: mess });
			})
			.catch(function (error) {
			  console.log(error);
			  df.formatErrorRes(req, res, error, cntxtDtls, '', {});
			});
		}
	  } else {
		const message = 'Old Password Is Wrong';
		df.formatSucessRes(req, res, message, cntxtDtls, '', { message: message });
	  }
	}).catch(function (error) {
	  console.log(error);
	  df.formatErrorRes(req, res, error, cntxtDtls, '', {});
	});
  };
  
/***************************************************************************
* Function : roleaddCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.roleaddCtrl=(req,res)=>{
	dashboardMdl.roleaddMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : portdisableCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.portdisableCtrl=(req,res)=>{
	dashboardMdl.portdisableMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
/***************************************************************************
* Function : devicesettingsCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicesettingsCtrl=(req,res)=>{
	dashboardMdl.locationpresentMdl(req.body,req.user).then(function(result){
		var length=result.length
	   console.log(length,'lengthhhhhhhhhhhhhhhhh')
	   dashboardMdl.devicesettingsMdl(req.body,req.user,length).then(function(results){
				df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	   })
		
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : devicefilterCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.devicefilterCtrl=(req,res)=>{
	dashboardMdl.devicefilterMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}


/***************************************************************************
* Function : locationlistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.locationlistCtrl=(req,res)=>{
	dashboardMdl.locationlistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : oslistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.oslistCtrl=(req,res)=>{
	dashboardMdl.oslistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : hardwarelistCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.hardwarelistCtrl=(req,res)=>{
	dashboardMdl.hardwarelistMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}

/***************************************************************************
* Function : neighboursCtrl
* Description : this model gives the list of a sensorslst 
* Arguments : callback function
* 04-11-2023 - RajKumar
*
******************************************************************************/
exports.neighboursCtrl=(req,res)=>{
	dashboardMdl.neighboursMdl(req.body,req.user).then(function(results){
	   console.log(results)
		df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	}).catch(function(error){
	   console.log(error)
		df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	});
}
