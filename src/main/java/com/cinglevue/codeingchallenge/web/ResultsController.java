package com.cinglevue.codeingchallenge.web;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cinglevue.codeingchallenge.domain.Result;
import com.cinglevue.codeingchallenge.domain.Subject;
import com.cinglevue.codeingchallenge.exception.CinglevueException;
import com.cinglevue.codeingchallenge.service.SchoolService;


@Controller
public class ResultsController {

	private static final Logger logger = Logger.getLogger(ResultsController.class);
	
	@Autowired
	private SchoolService schoolService;
	
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String printWelcome(ModelMap model) {
		logger.debug("Arrived Welcome Page");
		
		List<Subject> subjects;
		try {
			subjects = schoolService.getSubjectList();
			
			model.addAttribute("subjects", subjects);
			
		} catch (CinglevueException e) {
			logger.error(e.getMessage());
		}

		return "home";
	}
	
	@RequestMapping(value="getResultsJSON",method = RequestMethod.GET)
	public @ResponseBody String getJson(@RequestParam("subject")   String subject,ModelMap model) {
		 String jsonStr="";
		 try {
			logger.info(" Get JSON result for subject"+ subject);
			List<Result> results=schoolService.getRetulsBySubject(subject);
			ObjectMapper mapper = new ObjectMapper();
			jsonStr=mapper.writeValueAsString(results);
			
		} catch (Exception e) {
			logger.error(" Error " +e.getMessage());
			jsonStr="[{\"error\", \""+e.getMessage()+"\"}]";
		}
		return  "{ \"schools\": " +jsonStr +" }";
	}
}