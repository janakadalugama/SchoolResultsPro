package com.cinglevue.codeingchallenge.service.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.cinglevue.codeingchallenge.dao.SchoolDao;
import com.cinglevue.codeingchallenge.domain.Result;
import com.cinglevue.codeingchallenge.domain.School;
import com.cinglevue.codeingchallenge.domain.Subject;
import com.cinglevue.codeingchallenge.exception.CinglevueException;
import com.cinglevue.codeingchallenge.service.SchoolService;

public class SchoolServiceImpl implements SchoolService {
	
	private static final Logger logger = Logger.getLogger(SchoolService.class);
	
	@Autowired
	private SchoolDao schoolDao;

	public SchoolDao getSchoolDao() {
		return schoolDao;
	}

	public void setSchoolDao(SchoolDao schoolDao) {
		this.schoolDao = schoolDao;
	}

	@Override
	public List<Result> getRetulsBySubject(String subjectCode)
			throws CinglevueException {
		 
		logger.info("Entered to Service for quiring result for subject "+subjectCode);
		return schoolDao.getRetulsBySubject(subjectCode);
	}

	@Override
	public School getSchool(String id) throws CinglevueException {
		 
		return schoolDao.getAllSchool(id);
	}

	@Override
	public List<School> getAllSchools() throws CinglevueException {
		 
		return schoolDao.getAllSchools();
	}

	@Override
	public List<Subject> getSubjectList() throws CinglevueException {
	
		return schoolDao.getSubjectList();
	}

}
