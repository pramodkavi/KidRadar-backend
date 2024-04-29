const CourseModel = require("../models/courses");

exports.getCoursesByInstituteId = async (req, res) => {
    try {
        const instituteId = req.params.instituteId;
        const courses = await CourseModel.find({ instituteId: instituteId });
        res.status(200).json({ data: courses });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ error: "Failed to fetch courses" });
    }
}

exports.createCourse = async (req, res) => {
    try {
        const courseData = req.body;
        const course = new CourseModel(courseData);
        const savedCourse = await course.save();
        res.status(201).json({ id: savedCourse._id });
    } catch (error) {
        console.error("Error saving course:", error);
        res.status(500).json({ error: "Failed to save course" });
    }
}

exports.updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedCourse = await CourseModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updatedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json({ data: updatedCourse });
    }
    catch (error) {
        console.error("Error updating course:", error);
        res.status(500).json({ error: "Failed to update course" });
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCourse = await CourseModel.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json({ data: deletedCourse });
    }
    catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({ error: "Failed to delete course" });
    }
}



