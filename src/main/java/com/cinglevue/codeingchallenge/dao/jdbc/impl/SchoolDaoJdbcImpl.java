package com.cinglevue.codeingchallenge.dao.jdbc.impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.cinglevue.codeingchallenge.domain.Result;
import com.cinglevue.codeingchallenge.domain.School;
import com.cinglevue.codeingchallenge.domain.Subject;
import com.cinglevue.codeingchallenge.dao.SchoolDao;
import com.cinglevue.codeingchallenge.exception.CinglevueException;

public class SchoolDaoJdbcImpl implements SchoolDao {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@Override
	public List<Result> getRetulsBySubject(String subjectCode) throws CinglevueException{

		String sqlStr = "SELECT "
						+ " rs.id,"
						+ " rs.school_id,"
						+ " s.schoolName,"
						+ " rs.subject_id,"
						+ " rs.latestY3,"
						+ " rs.latestY5,"
						+ " rs.latestY7,"
						+ " rs.latestY9,"
						+ " rs.rawGainY3Y5,"
						+ " rs.factoredGainY3Y5,"
						+ " rs.glgY3Y5,"
						+ " rs.latestGainInGainY3Y5"
						+ " FROM results rs"
						+ " INNER join subjects sub on sub.id=rs.subject_id"
						+ " INNER join schools  s on s.id=rs.school_id"
						+ " WHERE "
						+ "  sub.id=?";

		RowMapper<Result> rowMapper = new RowMapper<Result>() {
			@Override
			public Result mapRow(ResultSet rs, int i) throws SQLException {
				Result r = new Result();
				r.setId(rs.getString("id"));
				 
				r.setSchoolName(rs.getString("s.schoolName"));
				return r;
			}
		};
		Object [] args = {subjectCode};
		List<Result> results = jdbcTemplate.query(sqlStr,args, rowMapper);
		return results;
	}


	@Override
	public School getAllSchool(String id) throws CinglevueException {
		String select = "SELECT *  FROM schools";
		return null;
	}

	@Override
	public List<School> getAllSchools() throws CinglevueException {

		String select = "SELECT *  FROM schools";
		 
		RowMapper<School> rowMapper = new RowMapper<School>() {
			
			@Override
			public School mapRow(ResultSet rs, int i) throws SQLException {
				School c = new School();
				 c.setName(rs.getString("name"));
				return c;
			}
		};
		
		List<School> schools = jdbcTemplate.query(select, rowMapper);
		return schools;
	}

	@Override
	public List<School> getSchoolsBySubject(String subjectCode)
			throws CinglevueException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Subject> getSubjectList() throws CinglevueException {
		// TODO Auto-generated method stub
		return null;
	}
	
	
}
