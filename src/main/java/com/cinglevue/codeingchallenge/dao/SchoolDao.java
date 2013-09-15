package com.cinglevue.codeingchallenge.dao;

import java.util.List;

import com.cinglevue.codeingchallenge.domain.Result;
import com.cinglevue.codeingchallenge.domain.School;
import com.cinglevue.codeingchallenge.domain.Subject;
import com.cinglevue.codeingchallenge.exception.CinglevueException;

public interface SchoolDao {
	
	public School getAllSchool(String id) throws CinglevueException;
	
	public List<School> getAllSchools() throws CinglevueException;
	
	public List<School> getSchoolsBySubject(String subjectCode) throws CinglevueException;
	
	public List<Result> getRetulsBySubject(String subjectCode) throws CinglevueException;
	
	public List<Subject> getSubjectList() throws CinglevueException;

}
