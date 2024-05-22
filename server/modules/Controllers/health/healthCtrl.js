var appRoot ='/home/nms-backend/actions-runner/_work/nms_node/nms_node';
var healthMdl = require('../../models/Health/healthMdl');
var df = require( '../../../../utils/dflower.utils');
var cntxtDtls = df.getModuleMetaData(__dirname, __filename);


/******************************************************************************************************
 * Controller : memorylistCtrl
 * Description : this model shows dropdown of a search filter
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
 exports.memorylistCtrl=(req,res)=>{
    healthMdl.memorylistMdl(req.body,req.user).then(function(results){
		console.log(results)
		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	 }).catch(function(error){
		console.log(error)
		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	 });
 }

 /******************************************************************************************************
 * Controller : fanspeedlistCtrl
 * Description : this model shows dropdown of a search filter
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
 exports.fanspeedlistCtrl=(req,res)=>{
    healthMdl.fanspeedlistMdl(req.body,req.user).then(function(results){
		console.log(results)
		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	 }).catch(function(error){
		console.log(error)
		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	 });
 }
  /******************************************************************************************************
 * Controller : currentlistCtrl
 * Description : this model shows dropdown of a search filter
 * 06-11-2023 - RajKumar 
 * 
 *******************************************************************************************************/
  exports.currentlistCtrl=(req,res)=>{
    healthMdl.currentlistMdl(req.body,req.user).then(function(results){
		console.log(results)
		 df.formatSucessRes(req,res,results,cntxtDtls,'',{});
	 }).catch(function(error){
		console.log(error)
		 df.formatErrorRes(req,res,error,cntxtDtls,'',{});
	 });
 }
  /******************************************************************************************************
   * Controller : voltagelistCtrl
  * Description : this model shows dropdown of a search filter
  * 06-11-2023 - RajKumar 
  * 
  *******************************************************************************************************/
   exports.voltagelistCtrl=(req,res)=>{
     healthMdl.voltagelistMdl(req.body,req.user).then(function(results){
         console.log(results)
          df.formatSucessRes(req,res,results,cntxtDtls,'',{});
      }).catch(function(error){
         console.log(error)
          df.formatErrorRes(req,res,error,cntxtDtls,'',{});
      });
  }

    /******************************************************************************************************
   * Controller : powerlistCtrl
  * Description : this model shows dropdown of a search filter
  * 06-11-2023 - RajKumar 
  * 
  *******************************************************************************************************/
    exports.powerlistCtrl=(req,res)=>{
        healthMdl.powerlistMdl(req.body,req.user).then(function(results){
            console.log(results)
             df.formatSucessRes(req,res,results,cntxtDtls,'',{});
         }).catch(function(error){
            console.log(error)
             df.formatErrorRes(req,res,error,cntxtDtls,'',{});
         });
     }

    /******************************************************************************************************
   * Controller : frequencylistCtrl
  * Description : this model shows dropdown of a search filter
  * 06-11-2023 - RajKumar 
  * 
  *******************************************************************************************************/
    exports.frequencylistCtrl=(req,res)=>{
        healthMdl.frequencylistMdl(req.body,req.user).then(function(results){
            console.log(results)
             df.formatSucessRes(req,res,results,cntxtDtls,'',{});
         }).catch(function(error){
            console.log(error)
             df.formatErrorRes(req,res,error,cntxtDtls,'',{});
         });
     }
       /******************************************************************************************************
   * Controller : frequencylistCtrl
  * Description : this model shows dropdown of a search filter
  * 06-11-2023 - RajKumar 
  * 
  *******************************************************************************************************/
    exports.frequencylistCtrl=(req,res)=>{
      healthMdl.frequencylistMdl(req.body,req.user).then(function(results){
          console.log(results)
           df.formatSucessRes(req,res,results,cntxtDtls,'',{});
       }).catch(function(error){
          console.log(error)
           df.formatErrorRes(req,res,error,cntxtDtls,'',{});
       });
   }
/******************************************************************************************************
   * Controller : frequencylistCtrl
  * Description : this model shows dropdown of a search filter
  * 06-11-2023 - RajKumar 
  * 
  *******************************************************************************************************/
    exports.statuslistCtrl=(req,res)=>{
        healthMdl.statuslistMdl(req.body,req.user).then(function(results){
            console.log(results)
             df.formatSucessRes(req,res,results,cntxtDtls,'',{});
         }).catch(function(error){
            console.log(error)
             df.formatErrorRes(req,res,error,cntxtDtls,'',{});
         });
     }
/******************************************************************************************************
   * Controller : TemperaturelistCtrl
  * Description : this model shows dropdown of a search filter
  * 06-11-2023 - RajKumar 
  * 
  *******************************************************************************************************/
    exports.TemperaturelistCtrl=(req,res)=>{
      healthMdl.TemperaturelistMdl(req.body,req.user).then(function(results){
          console.log(results)
           df.formatSucessRes(req,res,results,cntxtDtls,'',{});
       }).catch(function(error){
          console.log(error)
           df.formatErrorRes(req,res,error,cntxtDtls,'',{});
       });
   }
