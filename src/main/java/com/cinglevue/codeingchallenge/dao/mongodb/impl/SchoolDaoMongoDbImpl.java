package com.cinglevue.codeingchallenge.dao.mongodb.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import com.cinglevue.codeingchallenge.dao.SchoolDao;
import com.cinglevue.codeingchallenge.domain.Result;
import com.cinglevue.codeingchallenge.domain.School;
import com.cinglevue.codeingchallenge.domain.Subject;
import com.cinglevue.codeingchallenge.exception.CinglevueException;
import com.cinglevue.codeingchallenge.service.SchoolService;

public class SchoolDaoMongoDbImpl implements SchoolDao {

	private static final Logger logger = Logger.getLogger(SchoolDaoMongoDbImpl.class);
	
	@Autowired
	MongoOperations mongoOperation;
	
	@Override
	public School getAllSchool(String id) throws CinglevueException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<School> getAllSchools() throws CinglevueException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<School> getSchoolsBySubject(String subjectCode)
			throws CinglevueException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Result> getRetulsBySubject(String subjectCode)
			throws CinglevueException {

		logger.info("Entered to DAO for quiring result for subject "+subjectCode);
		
		Query searchUserQuery = new Query(Criteria.where("subject.code").is(subjectCode));
	    List<Result> lst= mongoOperation.find(searchUserQuery, Result.class);
		return lst;
	}

	@Override
	public List<Subject> getSubjectList() throws CinglevueException {
		// TODO Auto-generated method stub
		return null;
	}

}
