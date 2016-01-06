package com.ots.jcourt2.repository;

import com.ots.jcourt2.domain.Hearing;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Hearing entity.
 */
public interface HearingRepository extends JpaRepository<Hearing,Long> {

}
